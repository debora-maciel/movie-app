'use client';
import PercentageCircle from '@/app/components/percentage';
import { selectMovieSlected } from '@/store/features/movies/movieSlice';
import MoviesUtils from '@/utils/MoviesUtils';
import moment from 'moment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const Detail = () => {
    const movie = useSelector(selectMovieSlected);
    const searchParams = useSearchParams();
    const search = searchParams.get('id')

    console.log(movie)

    return (
        <div className='bg-blue-200 w-full h-full relative'>
            <div className='w-full h-14 flex items-center justify-center text-black bg-white z-50 absolute'>
                <div className='w-1/12 border-b border-b-4 border-cyan-500 h-full flex items-center justify-center'>Overview</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Media</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Fandom</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Share</div>
            </div>
            <div
                className={'absolute w-full bg-cover bg-no-repeat z-0 h-[45rem] brightness-[0.5] blur-[1.2px] top-0'}
                style={{ backgroundImage: `url("${'https://image.tmdb.org/t/p/original' + movie.backdrop_path}")` }}>
            </div>
            <header className='w-full h-full'>
                <div className='w-full z-10 h-[40rem] absolute top-14 flex items-center justify-center px-10'>
                    <div className='w-3/12 rounded-lg shadow-md h-5/6 mr-12 flex items-center justify-center'>
                        <picture className="">
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/svg" />
                            <source srcSet={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} type="image/jpg" />
                            <img
                                className="w-full rounded-lg"
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt="Landscape picture"
                            />
                        </picture>
                    </div>
                    <div className='w-10/12 h-5/6 flex flex-col'>
                        <div className='mb-2 h-1/6 flex items-end text-4xl font-bold'>{movie.title}
                            <span className='font-normal ml-4'>
                                ({moment(movie.release_date).format("YYYY")})
                            </span>
                        </div>
                        <div className='mb-2 h-10 text-base'> {moment(movie.release_date).format("MM/DD/YYYY")} (TR) * categorias * duração</div>
                        <div className='bg-yellow-500 mb-2 h-1/6 grid grid-cols-9 items-center'>
                            <div className='flex items-center justify-between col-span-1 px-2'>
                                <span className=''>
                                    <PercentageCircle size='lg' value={MoviesUtils.returnRoundedPercentage(movie.vote_average)} />
                                </span>
                                <span className='ml-4 font-semibold'>
                                    User Score
                                </span>
                            </div>
                            <div className='relative col-span-1 bg-red-200 grid'>

                            </div>
                        </div>
                        <div className='bg-yellow-500 mb-2 h-1/6'>frase efeito</div>
                        <div className='bg-yellow-500 mb-2 h-1/6'>{movie.overview}</div>
                        <div className='bg-yellow-500 mb-2'> nome director, personagens</div>
                    </div>
                </div>
                {/* <div className='bg-red-900 h-full absolute mt-96 z-40 blur-none brightness-100 w-full text-black'>
                Dashboard {search}
            </div> */}
            </header>
        </div>
    )
}

export default Detail;