import React from 'react'
import AuthLayout from '../../components/Layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'


const SignUp = () => {
    const [profilePic, setProfilePic] = React.useState(null)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required')
            return
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email')
            return
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        // Add signup logic here
    }

    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
                <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
                <form action="" onSubmit={handleSubmit}>
                    <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>

                        <Input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            label="Name"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            label="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='col-span-2'>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password(min 8 characters)"
                            value={password}
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <p className='text-red-500 text-xs mb-2'>{error}</p>
                    )}
                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300'>Sign Up</button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default SignUp