import Image from 'next/image'
import 
{SearchIcon,
GlobeAltIcon,
MenuIcon,
UserCircleIcon,
UserIcon} 
from '@heroicons/react/solid'

function Header(){
    return(
        <header className='sticky top-0 z-50 p-5 bg-white shadow-md md:px-10 grid grid-cols-3'>
            {/* left-logo-part */}
            <div className='relative my-auto h-10 md:shadow-sm cursor-pointer'>
                <Image src="/img/airbnb_logo.png" layout='fill' objectFit='contain' objectPosition='left'/>
            </div>
            {/* middle-search-part */}
            <div className='flex items-center border-2 py-2 rounded-full shadow-sm'>
                <input type="text" className='flex-grow pl-5 outline-none bg-transparent placeholder-gray-400 text-sm text-gray-600' placeholder='Start your search'/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 cursor-pointer'/>
            </div>
            {/* right-part */}
            <div className='flex items-center jus space-x-4 justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6'/>
                <div className='flex space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}

export default Header;