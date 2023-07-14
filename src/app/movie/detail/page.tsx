'use client';

import { setLoading } from '@/store/features/movies/movieSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { MovieDetail } from '../models/movie-detail.model';
import PercentageCircle from '@/app/components/percentage';
import movieService from '@/app/services/movie.service';
import MoviesUtils from '@/utils/MoviesUtils';
import start from '@/assets/icons/start.svg';
import heart from '@/assets/icons/heart.svg';
import { useEffect, useState } from 'react';
import play from '@/assets/icons/play.svg';
import menu from '@/assets/icons/menu.svg';
import save from '@/assets/icons/save.svg';
import { Tooltip } from '@mui/material';
import { useAppDispatch } from '@/hook';
import Image from 'next/image';
import moment from 'moment';

const Detail = () => {
    const [movie, setMovie] = useState<MovieDetail>();
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(setLoading(true));
        if (search) {
            movieService
                .getMovieDetail(search)
                .then((res: MovieDetail) => {
                    setMovie(res);
                    dispatch(setLoading(false));
                })
        } else {
            router.push('/');
        }
    }, [])

    return (
        <div className='w-full h-full absolute bg-black pb-[4rem]'>
            <div
                className={'absolute w-full bg-cover bg-no-repeat z-0 scale-100	h-[120rem] md:h-[44rem] brightness-[0.5] blur-[2.5px] top-0'}
                style={{ backgroundImage: `url("${'https://image.tmdb.org/t/p/original' + movie?.backdrop_path}")` }}>
            </div>
            <div className='mt-[100rem] pb-5 md:pb-2 md:mt-[44rem] absolute md:bg-white text-black h-[17rem] flex items-center max-w-full px-[6rem] mx-auto justify-center'>
                <div
                    className='mt-6 h-[15rem] max-w-[200rem] overflow-y-hidden overflow-x-scroll flex'>
                    {movie?.crew != undefined ?
                        movie?.crew.map((item, index) => (
                            <div key={index} className={item.profile_path == null ? 'hidden' : ' h-full bg-white flex mx-2 shadow-md w-min flex-col'}>
                                <picture className="w-[10rem] overflow-hidden h-[20rem] relative">
                                    <source srcSet={`https://image.tmdb.org/t/p/w400${item.profile_path}`} type="image/svg" />
                                    <source srcSet={`https://image.tmdb.org/t/p/w400${item.profile_path}`} type="image/jpg" />
                                    <source srcSet={`https://image.tmdb.org/t/p/w400${item.profile_path}`} type="image/png" />
                                    <img
                                        className="rounded-lg absolute mx-auto"
                                        src={`https://image.tmdb.org/t/p/w400${item.profile_path}`}
                                        alt="Landscape picture"
                                    />
                                </picture>
                                <p className='text-xs h-[6rem] border text-sm flex items-start pl-2 pt-2 font-bold text-black flex-col'>
                                    {item.name}
                                    <br />
                                    <span className='font-light mt-2'>
                                        {item.department}
                                    </span>
                                </p>
                            </div>
                        )) : <></>}
                </div>
            </div>
            <div className='w-full h-14 flex items-center justify-center text-black bg-white z-50 absolute'>
                <div className='w-[40rem] grid grid-cols-4 text-sm h-full pt-4'>
                    <div className='border-b border-b-4 border-cyan-500 h-full text-center'>Overview</div>
                    <div className='h-full text-center'>Media</div>
                    <div className='h-full text-center'>Fandom</div>
                    <div className='h-full text-center'>Share</div>
                </div>
            </div>
            <div className='w-11/12 mx-auto relative bg-orange-200 mt-8 md:mt-0'>
                <div className='w-full z-10 h-[40rem] absolute md:top-14 top-20 flex flex-col md:flex-row md:items-center md:justify-center px-10'>
                    <div className='md:w-3/12 rounded-lg shadow-md h-5/6 mr-12 flex items-center justify-center'>
                        <picture className="">
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} type="image/svg" />
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} type="image/jpg" />
                            <img
                                className="w-full rounded-lg"
                                src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
                                alt="Landscape picture"
                            />
                        </picture>
                    </div>
                    <div className='w-full text-center md:text-left h-[60rem] md:w-10/12 md:h-[84%] flex flex-col'>
                        <div className='mb-2 mt-10 md:mt-0 md:h-1/6 flex items-end text-xl mx-auto md:mx-0 md:text-left md:text-4xl font-bold'>{movie?.title}
                            <span className='font-normal ml-4'>
                                ({moment(movie?.release_date).format("YYYY")})
                            </span>
                        </div>
                        <div className='mb-2 h-10 text-sm md:text-base'> {moment(movie?.release_date).format("MM/DD/YYYY")}
                            (TR) * {movie?.genres.map((genre) => (
                                <span className='px-2' key={genre.id}>{genre.name}</span>))
                            }
                            * {movie ? MoviesUtils.returnTimeConvert(movie.runtime) : '-'}
                        </div>
                        <div className='w-[38rem] mb-2 h-1/6 flex items-center'>
                            <div className='flex items-center justify-between md:w-auto px-2 overflow-hidden'>
                                <span>
                                    <PercentageCircle size='lg' value={MoviesUtils.returnRoundedPercentage(movie ? movie.vote_average : 0)} />
                                </span>
                                <span className='ml-4 font-semibold w-14'>
                                    User Score
                                </span>
                            </div>
                            <div className='pt-2 mx-10 grid grid-cols-2 gap-2 md:hidden'>
                                <div className='rounded-full flex defaultColor items-center w-14 h-14 flex-wrap justify-center md:w-16 md:h-16 mx-auto'>
                                    <Tooltip title={'Menu'}>
                                        <Image
                                            className='w-5'
                                            alt={'menu_icon'}
                                            src={menu}
                                        />
                                    </Tooltip>
                                </div>
                                <div className='rounded-full flex defaultColor items-center w-14 h-14 flex-wrap justify-center md:w-16 md:h-16 mx-auto'>
                                    <Tooltip title={'Like'}>
                                        <Image
                                            className='w-5'
                                            alt={'heart_icon'}
                                            src={heart}
                                        />
                                    </Tooltip>
                                </div>
                                <div className='rounded-full flex defaultColor items-center w-14 h-14 flex-wrap justify-center md:w-16 md:h-16 mx-auto'>
                                    <Tooltip title={'Save'}>
                                        <Image
                                            className='w-5'
                                            alt={'save'}
                                            src={save}
                                        />
                                    </Tooltip>
                                </div>
                                <div className='rounded-full flex defaultColor items-center w-14 h-14 flex-wrap justify-center md:w-16 md:h-16 mx-auto'>
                                    <Tooltip title={'Favorite'}>
                                        <Image
                                            className='w-5'
                                            alt={'start'}
                                            src={start}
                                        />
                                    </Tooltip>
                                </div>
                            </div>
                            <div className='flex px-2 items-center font-medium'>
                                <Image
                                    className='w-5 mr-3'
                                    alt={'play'}
                                    src={play}
                                />
                                Play Trailer
                            </div>
                        </div>
                        <div className='mb-4 italic text-gray-200 text-base mt-4'>{movie?.tagline}</div>
                        <div className='mb-4 text-2xl font-medium'>Overview</div>
                        <div className='h-min mb-3 h-1/6 text-base text-justify leading-7'>{movie?.overview}</div>
                        <div className='mb-4 text-2xl font-medium'>Credits</div>
                        <div className='rounded-lg md:bg-transparent h-[40rem] mb-10 md:mb-0 text-sm grid grid-cols-2 md:grid-cols-12 overflow-y-scroll'>
                            {movie?.crew != undefined ?
                                movie?.crew.map((item, index) => (
                                    <div key={index} className='flex flex-col m-2'>
                                        <p className='text-sm text-white font-bold'>{item.name}</p>
                                        <p className='text-xs'>{item.job}</p>
                                    </div>
                                )) : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;