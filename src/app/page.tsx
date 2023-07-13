'use client';

import { selectMovies } from '@/store/features/movies/movieSlice';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/navbar';
import SideFilter from './components/side-filter';
import List from './pages/movie/list';

export default function Home() {
  const state = useSelector(selectMovies);

  console.log(state)

  return (
    <main className="flex min-h-screen bg-white flex-col h-screen">
      <NavBar />
      <div className='pl-20 font-bold text-black h-16 mb-4 flex items-end text-2xl'>Popular Movies</div>
      <header className='w-full px-20 h-5/6 text-black flex items-center justify-between'>
        <div className='w-1/6 h-full'>
          <SideFilter />
        </div>
        <div className='w-5/6 bg-pink-900 ml-10 overflow-y-scroll h-full'>
          <List />
        </div>
      </header>
    </main>
  )
}
