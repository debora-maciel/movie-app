

import arrowright from '@/assets/icons/arrowright.svg';
import arrowdown from '@/assets/icons/arrowdown.svg';
import Image from 'next/image';

const SideFilter = () => {
    const movieCount = 28;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full shadow-xl border h-14 flex items-center justify-between px-4 rounded-lg bg-white font-bold">
                Sort
                <Image className='w-5' alt={'icon_arrowright'} src={arrowright} />
            </div>
            <div className="w-full shadow-xl border h-14 flex items-center justify-between px-4 rounded-lg bg-white font-bold mt-4">
                Where to Watch
                <span className='py-1 px-2 bg-gray-200 text-gray-700 rounded-lg'>{movieCount}</span>
                <Image className='w-5' alt={'icon_arrowright'} src={arrowright} />
            </div>
            <div className="w-full shadow-xl border flex flex-col rounded-lg bg-white font-bold mt-4">
                <div className='flex items-center justify-between h-14 px-4'>
                    Filters
                    <Image className='w-5' alt={'icon_arrowdown'} src={arrowdown} />
                </div>
                <div className='w-full border-t p-4 flex flex-col font-light'>
                    <div className='mb-2 font-medium flex items-center'>Show Me <div className='ml-2 flex items-center justify-center bg-gray-400 rounded-full p-1 w-4 h-4 text-xs text-white'>?</div></div>
                    <div className='mb-1'>
                        <input type="radio" id="everything" name="everything" value="everything" />
                        <label className='ml-2' htmlFor="everything">Everything</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" id="moviesNotSeen" name="moviesNotSeen" value="moviesNotSeen" />
                        <label className='ml-2' htmlFor="moviesNotSeen">Movies I Haven{"'"}t Seen</label>
                    </div>
                    <div>
                        <input type="radio" id="moviesSeen" name="moviesSeen" value="moviesSeen" />
                        <label className='ml-2' htmlFor="moviesSeen">Movies I Have Seen</label>
                    </div>
                </div>
                <div className='w-full border-t p-4 flex flex-col font-light'>
                    <div className='mb-2  font-medium'>Availabilities</div>
                    <div className='mb-1'>
                        <input type="checkbox" id="availabilities" name="availabilities" value="availabilities" />
                        <label className='ml-2' htmlFor="availabilities">Search all availabilities?</label>
                    </div>
                </div>
                <div className='w-full border-t p-4 flex flex-col font-light'>
                    <div className='mb-2 font-medium'>Release Dates</div>
                    <div className='mb-3'>
                        <input type="checkbox" id="allRealeases" name="allRealeases" value="allRealeases" />
                        <label className='ml-2' htmlFor="allRealeases">Search all realeases?</label>
                    </div>
                    <div className='flex items-center justify-between mb-2'>
                        <label className='text-gray-400 text-sm font-normal' htmlFor="fromDate">from</label>
                        <input className='border p-1 rounded text-sm' type={'date'} id="fromDate" name="fromDate" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <label className='text-gray-400 text-sm font-normal' htmlFor="toDate">to</label>
                        <input className='border p-1 rounded text-sm' type={'date'} id="toDate" name="toDate"/>
                    </div>
                </div>
                <div className='w-full border-t p-4 flex flex-col font-light'>
                    <div className='mb-2 font-medium'>Genres</div>
                    <div className='mb-1 flex flex-1 items-center justify-evenly flex-wrap'>
                        <div className='w-auto rounded-full border border-black px-5 py-2 font-medium'>Action</div>
                        <div className='rounded-full border border-black px-5 py-2 font-medium'>Adventure</div>
                        <div className='rounded-full border border-black px-5 py-2 mt-3 font-medium'>Animation</div>
                        <div className='rounded-full border border-black px-5 py-2 mt-3 font-medium'>Comedy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideFilter;