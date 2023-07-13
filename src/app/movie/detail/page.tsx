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
        <div className='w-full h-[93%] absolute overflow-x-hidden'>
            <div
                className={'absolute w-full bg-cover bg-no-repeat z-0 h-[44rem] brightness-[0.5] blur-[2.5px] top-0'}
                style={{ backgroundImage: `url("${'https://image.tmdb.org/t/p/original' + movie?.backdrop_path}")` }}>
            </div>
            <div className='mt-[44rem] absolute bg-white text-black h-[17rem] flex items-center max-w-full px-[6rem] mx-auto justify-center'>
                <div
                    className='mt-6 h-[15rem] max-w-[200rem] overflow-y-hidden overflow-x-scroll flex'>
                    {movie?.crew != undefined ?
                        movie?.crew.map((item, index) => (
                            <div key={index} className={item.profile_path == null ? 'hidden' : ' h-full flex mx-2 shadow-md w-min flex-col'}>
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
                <div className='w-1/12 border-b border-b-4 border-cyan-500 h-full flex items-center justify-center'>Overview</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Media</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Fandom</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Share</div>
            </div>
            <div className='w-11/12 mx-auto relative'>
                <div className='w-full z-10 h-[40rem] absolute top-14 flex items-center justify-center px-10'>
                    <div className='w-3/12 rounded-lg shadow-md h-5/6 mr-12 flex items-center justify-center'>
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
                    <div className='w-10/12 h-[84%] flex flex-col'>
                        <div className='mb-2 h-1/6 flex items-end text-4xl font-bold'>{movie?.title}
                            <span className='font-normal ml-4'>
                                ({moment(movie?.release_date).format("YYYY")})
                            </span>
                        </div>
                        <div className='mb-2 h-10 text-base'> {moment(movie?.release_date).format("MM/DD/YYYY")}
                            (TR) * {movie?.genres.map((genre) => (
                                <span className='px-2' key={genre.id}>{genre.name}</span>))
                            }
                            * {movie ? MoviesUtils.returnTimeConvert(movie.runtime) : '-'}
                        </div>
                        <div className='w-3/6 mb-2 h-1/6 flex items-center'>
                            <div className='flex items-center justify-between col-span-1 px-2'>
                                <span className=''>
                                    <PercentageCircle size='lg' value={MoviesUtils.returnRoundedPercentage(movie ? movie.vote_average : 0)} />
                                </span>
                                <span className='ml-4 font-semibold w-14'>
                                    User Score
                                </span>
                            </div>
                            <div className='rounded-full flex defaultColor items-center justify-center w-16 h-16 mx-auto'>
                                <Image
                                    className='w-5'
                                    alt={'menu_icon'}
                                    src={menu}
                                />
                            </div>
                            <div className='rounded-full flex defaultColor items-center justify-center w-16 h-16 mx-auto'>
                                <Image
                                    className='w-5'
                                    alt={'heart_icon'}
                                    src={heart}
                                />
                            </div>
                            <div className='rounded-full flex defaultColor items-center justify-center w-16 h-16 mx-auto'>
                                <Image
                                    className='w-5'
                                    alt={'save'}
                                    src={save}
                                />
                            </div>
                            <div className='rounded-full flex defaultColor items-center justify-center w-16 h-16 mx-auto'>
                                <Image
                                    className='w-5'
                                    alt={'start'}
                                    src={start}
                                />
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
                        <div className='h-[40rem] text-sm grid grid-cols-12 overflow-y-scroll mt-6'>
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
                <div className='text-black w-full z-10 font-7xl bg-purple-800'>
                    asopdkaodkas
                </div>
            </div>
        </div>
    )
}

export default Detail;