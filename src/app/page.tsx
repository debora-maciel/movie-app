'use client';

import SideFilter from './components/side-filter';
import List from './components/list';

export default function Home() {
  return (
    <main className="flex h-screen bg-white flex-col">
      <div className='pl-20 font-bold text-black h-16 mb-4 flex items-end text-2xl'>Popular Movies</div>
      <header className='w-full px-20 h-5/6 text-black flex items-center justify-between'>
        <div className='lg:w-[20rem] h-full'>
          <SideFilter />
        </div>
        <div className='w-5/6 ml-6 h-full'>
          <List />
        </div>
      </header>
    </main>
  )
}
