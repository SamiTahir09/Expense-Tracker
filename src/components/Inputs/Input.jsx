import React from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, type, placeholder, label }) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='mb-4'>
            <label className='block text-md font-medium text-slate-700 mb-1'>{label}</label>
            <div className='input-box'>
                <input
                    value={value}
                    onChange={(e) => onChange(e)}
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    className='w-full px-1 py-1 focus:outline-none'
                />
                {
                    type === 'password' && (
                        <>
                            {
                                showPassword ?
                                    <FaRegEyeSlash
                                        size={22}
                                        className=' cursor-pointer text-primary'
                                        onClick={togglePasswordVisibility}
                                    />
                                    :
                                    <FaRegEye
                                        size={22}
                                        className='cursor-pointer text-primary'
                                        onClick={togglePasswordVisibility}
                                    />
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Input