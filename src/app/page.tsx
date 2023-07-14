'use client';

import SideFilter from './components/side-filter';
import List from './components/list';

export default function Home() {
  return (
    <main className="flex h-auto flex-col overflow-y-scroll pb-[2rem]">
      <div className='pl-20 font-bold text-black h-16 mb-4 flex items-end text-2xl'>Popular Movies</div>
      <header className='w-full px-20 h-5/6 text-black flex items-start justify-between'>
        <div className='lg:w-[20rem]'>
          <SideFilter />
        </div>
        <div className='w-5/6 ml-6 h-full pb-[10rem]'>
          <List />
        </div>
      </header>
    </main>
  )
}
