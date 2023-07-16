
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import search from '@/assets/icons/search.svg';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import logo from '@/assets/images/logo.svg';
import { Fragment, useState } from 'react';
import plus from '@/assets/icons/plus.svg';
import menu from '@/assets/icons/menu.svg';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from "next/link";

const NavBar = () => {
    const [open, setOpenMenu] = useState(false);

    return (
        <div className="defaultColor w-full flex h-16 items-center justify-between shadow min-w-[20rem]">
            <Image onClick={() => setOpenMenu(true)} className='w-[3rem] md:hidden hover:bg-blue-900 rounded-full p-3' src={menu} alt={'menu_tmdb'} />
            <Image className='w-40rem mx-auto md:hidden' src={logo} alt={'logo_tmdb'} />
            <div className='w-[40rem] hidden md:flex flex items-center pl-20 text-sm'>
                <div className='w-2/6 flex items-center'>
                    <Image className='w-full' src={logo} alt={'logo_tmdb'} />
                </div>
                <Link className='w-2/5 text-center cursor-pointer link-hover' href={'/'}>
                    Movies
                </Link>
                <div className='w-2/5 sm:bg-red-400 md:bg-transparent text-center cursor-pointer link-hover'>
                    TV Shows
                </div>
                <div className='w-2/5 text-center cursor-pointer link-hover'>
                    People
                </div>
                <div className='w-1/5 text-center cursor-pointer link-hover'>
                    More
                </div>
            </div>
            <div className='w-[40rem] hidden md:flex items-center justify-center pr-20 text-sm'>
                <div className='w-1/6 flex items-center'>
                    <Image className='w-6 mx-auto' src={plus} alt={'plus_icon'} />
                </div>
                <div className='w-1/6 text-center h-full cursor-pointer link-hover '>
                    <span className='w-7 rounded border border-white h-full p-1 hover:border-blue-400'>
                        EN
                    </span>
                </div>
                <div className='w-1/6 text-center cursor-pointer link-hover'>
                    Login
                </div>
                <div className='w-2/5 lg:w-1/6 text-center cursor-pointer link-hover'>
                    Join TMDB
                </div>
                <div className='w-1/6 text-center'>
                    <Image className='w-6 mx-auto' src={search} alt={'search_icon'} />
                </div>
            </div>

            <Fragment key={'left'}>
                <Drawer anchor={'left'} open={open} onClose={() => setOpenMenu(true)}>
                    <Box sx={{ width: 250 }}
                        role="presentation">
                        <List>
                            <ListItem key={'a'}>
                                <ListItemButton className='flex items-center justify-between'>
                                    <Image onClick={() => setOpenMenu(false)} className='w-[10rem] mx-auto' src={logo} alt={'logo_tmdb'} />
                                    <Image onClick={() => setOpenMenu(false)} className='w-[2rem] bg-cyan-900 rounded-full p-[6px]' src={menu} alt={'menu_tmdb'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <Link href={'/'}>
                                    <ListItemText primary={'Movies'} />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'TV Shows'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'People'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'More'} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemText primary={'Movies'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'Login'} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'Join TMDB'} />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Fragment>
        </div>
    )
}

export default NavBar;