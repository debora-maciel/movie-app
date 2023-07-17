import { selectFilter, setListFilter } from '@/store/features/movies/movieSlice';
import { MenuItem, Select, Tooltip } from '@mui/material';
import arrowright from '@/assets/icons/arrowright.svg';
import arrowdown from '@/assets/icons/arrowdown.svg';
import filterIcon from '@/assets/icons/filter.svg';
import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { useAppDispatch } from '@/hook';
import Box from '@mui/material/Box';
import Image from 'next/image';

const MenuContent = ({ count, setFilter, filter }: { count: number, setFilter: (value: any) => void, filter: string }) => {
    return (
        <>
            <div className="w-full mt-4 shadow-xl border h-[4rem] py-4 flex items-center justify-between px-7 rounded-lg bg-white font-bold">
                Sort
                <Image className='w-5' alt={'icon_arrowright'} src={arrowright} />
            </div>
            <div className="w-full mt-4 shadow-xl border h-[4rem] py-4 flex items-center justify-between px-4 rounded-lg bg-white font-bold">
                <Select
                    sx={{
                        "& fieldset": {
                            padding: '0',
                            border: "none",
                        }
                    }}
                    className='w-full font-bold' value={filter} onChange={(item) => { setFilter(item) }}>
                    <MenuItem className='mb-3 font-bold  px-6 py-2' value={'popular'}>Popular</MenuItem>
                    <MenuItem className='mb-3 font-bold px-6 py-2' value={'upcoming'}>Upcoming</MenuItem>
                    <MenuItem className='mb-3 font-bold  px-6 py-2' value={'top_rated'}>Top rated</MenuItem>
                </Select>
            </div>
            <div className="w-full shadow-xl border h-[4rem] py-3 flex items-center justify-between px-7 rounded-lg bg-white font-bold mt-4">
                Where to Watch
                <span className='py-1 px-2 bg-gray-200 text-gray-700 rounded-lg'>{count}</span>
                <Image className='w-5' alt={'icon_arrowright'} src={arrowright} />
            </div>
            <div className="w-full shadow-xl border flex flex-col rounded-lg bg-white font-bold mt-4">
                <div className='flex items-center justify-between h-[4rem] px-4'>
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
                        <input className='border p-1 rounded text-sm' type={'date'} id="toDate" name="toDate" />
                    </div>
                </div>
                <div className='w-full border-t p-4 flex flex-col font-light'>
                    <div className='mb-2 font-medium'>Genres</div>
                    <div className='mb-1 flex flex-1 items-center justify-evenly flex-wrap gap-2'>
                        <div className='w-auto rounded-full hover:bg-cyan-400 hover:text-cyan-900 hover:border-purple-200 pt-1 cursor-pointer border border-black px-5 h-[2rem] font-medium'>Action</div>
                        <div className='rounded-full hover:bg-cyan-400 hover:text-cyan-900 hover:border-purple-200 pt-1 cursor-pointer border border-black px-5 h-[2rem] font-medium'>Adventure</div>
                        <div className='rounded-full hover:bg-cyan-400 hover:text-cyan-900 hover:border-purple-200 pt-1 cursor-pointer border border-black px-5 h-[2rem] font-medium'>Animation</div>
                        <div className='rounded-full hover:bg-cyan-400 hover:text-cyan-900 hover:border-purple-200 pt-1 cursor-pointer border border-black px-5 h-[2rem] font-medium'>Comedy</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SideFilter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useAppDispatch();
    const movieCount = 28;

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const setFilter = (value: any) => {
        dispatch(setListFilter(value.target.value));
    }

    return (
        <>
            <div className="hidden w-full h-full lg:flex flex-col">
                <MenuContent filter={filter} setFilter={setFilter} count={movieCount} />
            </div>

            <Tooltip title={'Filter'}>
                <Image
                    onClick={toggleDrawer('left', true)}
                    alt={'icon_filter'}
                    className='lg:hidden w-[3rem] cursor-pointer hover:bg-cyan-800 rounded-full shadow flex items-center justify-center p-2 bg-cyan-600'
                    src={filterIcon} />
            </Tooltip>
            <div>
                <Fragment key={'left'}>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={toggleDrawer('left', false)}
                            onKeyDown={toggleDrawer('left', false)}
                        >
                            <MenuContent filter={filter} setFilter={setFilter} count={movieCount} />
                        </Box>
                    </Drawer>
                </Fragment>
            </div>
        </>
    )
}

export default SideFilter;