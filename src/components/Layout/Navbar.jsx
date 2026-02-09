import React from 'react'
import { SideMenu } from './SideMenu';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export const Navbar = ({ activeMenu }) => {
    const [opensidemenu, setOpenSidemenu] = React.useState(false);

    return (
        <>
            <div className='flex gap-5 bg-white  border  border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-50'>
                <button onClick={() => setOpenSidemenu(!opensidemenu)} className='block lg:hidden text-black'>
                    {opensidemenu ? <HiOutlineX className='text-2xl' /> : <HiOutlineMenu className='text-2xl' />}
                </button>
                <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
                {
                    opensidemenu && (
                        <div className='fixed top-[61px] -ml-4 bg-white '>
                            <SideMenu activeMenu={activeMenu} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
