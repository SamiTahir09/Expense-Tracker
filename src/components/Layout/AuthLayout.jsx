import React from 'react'
import LoginImg from '../../images/login-img.jpg'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex '>
            <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
                <h2 className='text-3xl font-medium text-black'>Expense Tracker</h2>
                {children}
            </div>
            <div className=' flex justify-center items-center'>

                <img src={LoginImg} alt="Login" className='w-[40vw] h-screen object-cover hidden md:block' />
            </div>
        </div>
    )
}

export default AuthLayout