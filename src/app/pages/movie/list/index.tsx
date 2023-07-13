'use client';

import ellipsishorizontal from '@/assets/icons/ellipsishorizontal.svg';
import movieService from "../service/movie.service";
import { useEffect, useState } from "react";
import Image from 'next/image';
import moment from 'moment';
import MoviesUtils from '@/utils/MoviesUtils';

const List = () => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        movieService
            .getMovies()
            .then((res: any) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-5 gap-8 pr-10">
            {
                movies.length > 0 && movies.map((movie, index) => (
                    <div key={index} className="shadow-md rounded-lg h-[30rem] flex flex-col relative">
                        <Image className='absolute shadow-xl right-1 top-1 rounded-full w-11 h-11 flex items-center justify-center w-10 h-10 mx-auto' src={ellipsishorizontal} alt={'ellipsishorizontal_icon'} />
                        <picture className="">
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/svg" />
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/jpg" />
                            <img
                                className="w-[25rem] rounded-lg"
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt="Landscape picture"
                            />
                        </picture>
                        <div className="absolute bottom-24 left-2 rounded-full border-2 bg-black w-10 p-2 h-10 flex items-center justify-center text-xs font-medium text-white">
                            {Math.round(Number(movie.vote_average) * 100 / 10)}%
                        </div>
                        <div className="w-full p-4 font-bold text-base h-[6rem]">
                            <p className='h-4/5'>{movie.title}</p>
                            <p className='text-sm font-medium text-gray-500'>{MoviesUtils.returnMonthComplete(moment(movie.release_date).format('M'))} {moment(movie.release_date).format('D')}, {moment(movie.release_date).format('YYYY')}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default List;