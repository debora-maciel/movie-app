

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
                    <div>Show Me ?</div>
                    <div>
                        <label htmlFor="css">CSS</label>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        Everything</div>
                    <div>Movies I Haven{"'"}t Seen</div>
                    <div>Movies I Have Seen</div>
                </div>
                <div className='w-full h-36 border-t px-4 flex flex-col'>
                    <div>Everything</div>
                    <div>Movies I Haven{"'"}t Seen</div>
                    <div>Movies I Have Seen</div>
                </div>
            </div>
        </div>
    )
}

export default SideFilter;