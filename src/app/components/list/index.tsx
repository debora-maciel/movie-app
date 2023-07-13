'use client';

import { selectFilter, setLoading } from '@/store/features/movies/movieSlice';
import ellipsishorizontal from '@/assets/icons/ellipsishorizontal.svg';
import movieService from "../../services/movie.service";
import MoviesUtils from '@/utils/MoviesUtils';
import PercentageCircle from '../percentage';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hook';
import Image from 'next/image';
import Link from "next/link";
import moment from 'moment';

const List = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const filter = useSelector(selectFilter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        movieService
            .getMovies(filter)
            .then((res: any) => {
                setMovies(res.data.results);
                dispatch(setLoading(false));
            })
    }, [filter])

    return (
        <div className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-6 pr-2">
            {
                movies.length > 0 && movies.map((movie, index) => (
                    <div key={index} className="h-min shadow-md rounded-lg flex flex-col relative bg-white">
                        <Image
                            className='absolute shadow-xl right-1 top-1 rounded-full w-11 h-11 flex items-center justify-center w-10 h-10 mx-auto'
                            src={ellipsishorizontal} alt={'ellipsishorizontal_icon'} />
                        <picture className="">
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/svg" />
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/jpg" />
                            <img
                                className="w-[25rem] rounded-lg border-cyan-700 border-b border-b-4"
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt="Landscape picture"
                            />
                        </picture>
                        <div>
                            <PercentageCircle
                                value={MoviesUtils.returnRoundedPercentage(movie.vote_average)}
                                size='sm'
                            />
                        </div>

                        <div className="w-full px-3 pt-1 font-bold min-h-[6rem] h-min hover:text-orange-600">
                            <Link className='h-4/5' href={{
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