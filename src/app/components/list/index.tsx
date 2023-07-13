'use client';

import ellipsishorizontal from '@/assets/icons/ellipsishorizontal.svg';
import { setLoading, setMovieSelected } from '@/store/features/movies/movieSlice';
import movieService from "../../services/movie.service";
import MoviesUtils from '@/utils/MoviesUtils';
import PercentageCircle from '../percentage';
import { useEffect, useState } from "react";
import { useAppDispatch } from '@/hook';
import Image from 'next/image';
import Link from "next/link";
import moment from 'moment';

const List = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const dispatch = useAppDispatch();

    const selectMovie = (movie: any) => {
        dispatch(setMovieSelected(movie));
    }

    useEffect(() => {
        dispatch(setLoading(true));
        movieService
            .getMovies()
            .then((res: any) => {
                setMovies(res.data.results);
                dispatch(setLoading(false));
            })
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-5 gap-8 pr-10">
            {
                movies.length > 0 && movies.map((movie, index) => (
                    <div key={index} className="shadow-md rounded-lg h-[30rem] flex flex-col relative bg-white">
                        <Image className='absolute shadow-xl right-1 top-1 rounded-full w-11 h-11 flex items-center justify-center w-10 h-10 mx-auto' src={ellipsishorizontal} alt={'ellipsishorizontal_icon'} />
                        <picture className="">
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/svg" />
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/jpg" />
                            <img
                                className="w-[25rem] rounded-lg border-cyan-700 border-b border-b-4"
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt="Landscape picture"
                            />
                        </picture>

                        <PercentageCircle
                            size='sm'
                            value={MoviesUtils.returnRoundedPercentage(movie.vote_average)} />

                        <div className="w-full p-4 font-bold text-base h-[6rem] hover:text-orange-600">
                            <Link onClick={() => selectMovie(movie)} className='h-4/5' href={{
                                pathname: '/movie/detail',
                                query: { id: movie.id },
                            }}>
                                {movie.title}
                            </Link>
                            <p className='text-sm font-medium text-gray-500'>{MoviesUtils.returnMonthComplete(moment(movie.release_date).format('M'))} {moment(movie.release_date).format('D')}, {moment(movie.release_date).format('YYYY')}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default List;