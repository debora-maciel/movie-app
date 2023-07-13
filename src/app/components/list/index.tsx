'use client';

import ellipsishorizontal from '@/assets/icons/ellipsishorizontal.svg';
import { setMovieSelected } from '@/store/features/movies/movieSlice';
import movieService from "../../services/movie.service";
import MoviesUtils from '@/utils/MoviesUtils';
import { useEffect, useState } from "react";
import { useAppDispatch } from '@/hook';
import Image from 'next/image';
import Link from "next/link";
import moment from 'moment';

const List = () => {
    const [movies, setMovies] = useState<any[]>([]);

    const dispatch = useAppDispatch();

    const handlePercentageCircle = (value: number) => {
        let color = value > 0 && value < 15 ? 'bg-red-600' :
            value > 20 && value < 35 ? 'bg-orange-600' :
                value > 30 && value < 60 ? 'bg-yellow-600' :
                    value > 60 && value < 70 ? 'bg-lime-600' :
                        value > 85 ? 'bg-lime-600' :
                            'bg-green-700';

        return (
            <>
                <div className={`border-cyan-600 border border-4 absolute bottom-24 left-2 rounded-full ${color} border-2 bg-black w-10 p-2 h-10 flex items-center justify-center text-xs font-medium text-white`}
                >
                    {value}%
                </div>
            </>
        )
    }

    const selectMovie = (movie: any) => {
        dispatch(setMovieSelected(movie));
    }

    useEffect(() => {
        movieService
            .getMovies()
            .then((res: any) => {
                setMovies(res.data.results);
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

                        {handlePercentageCircle(MoviesUtils.returnRoundedPercentage(movie.vote_average))}

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