'use client';
import { selectMovieSlected } from '@/store/features/movies/movieSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const Detail = () => {
    const movie = useSelector(selectMovieSlected);
    const searchParams = useSearchParams();
    const search = searchParams.get('id')

    console.log(movie)

    return (
        <div className='bg-blue-200 w-full h-full'>
            <div className='w-full h-14 flex items-center justify-center text-black bg-white'>
                <div className='w-1/12 border-b border-b-4 border-cyan-500 h-full flex items-center justify-center'>Overview</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Media</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Fandom</div>
                <div className='w-1/12 h-full flex items-center justify-center'>Share</div>
            </div>
            <header className='w-full h-full relative'>
                <div
                    className={'absolute w-full bg-cover bg-no-repeat z-0 h-[40rem] brightness-50 sepia blur-[1px]'}
                    style={{ backgroundImage: `url("${'https://image.tmdb.org/t/p/original' + movie.backdrop_path}")` }}>
                </div>
                <div className='w-full z-10 h-[40rem] absolute top-0 flex items-center justify-center px-10'>
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
                    <div className='w-10/12 h-5/6'>
                        first pic
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