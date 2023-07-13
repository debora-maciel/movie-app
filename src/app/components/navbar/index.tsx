
import search from '@/assets/icons/search.svg';
import logo from '@/assets/images/logo.svg';
import plus from '@/assets/icons/plus.svg';
import Image from 'next/image';
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar-default-color w-full h-16 flex items-center justify-between shadow">
            <div className='w-2/5 flex items-center pl-20 text-sm'>
                <div className='w-2/6 flex items-center'>
                    <Image className='w-full' src={logo} alt={'logo_tmdb'} />
                </div>
                <Link className='w-1/6 text-center cursor-pointer link-hover' href={'/'}>
                    Movies
                </Link>
                <div className='w-1/6 text-center cursor-pointer link-hover'>
                    TV Shows
                </div>
                <div className='w-1/6 text-center cursor-pointer link-hover'>
                    People
                </div>
                <div className='w-1/6 text-center cursor-pointer link-hover'>
                    More
                </div>
            </div>
            <div className='w-2/5 flex items-center justify-center pr-20 text-sm'>
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
                <div className='w-1/6 text-center cursor-pointer link-hover'>
                    Join TMDB
                </div>
                <div className='w-1/6 text-center'>
                    <Image className='w-6 mx-auto' src={search} alt={'search_icon'} />
                </div>
            </div>
        </div >
    )
}

export default NavBar;