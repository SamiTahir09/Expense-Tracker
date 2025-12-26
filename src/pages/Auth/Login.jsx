import React from 'react'
import AuthLayout from '../../components/Layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')


    const navigate = useNavigate()



    const handlelogin = async (e) => {
        e.preventDefault()
        if (!validateEmail(email)) {
            setError('Please enter a valid email address')
            return
        }
        if (!password || password.length < 6) {
            setError('Password must be at least 6 characters long')
            return
        }
        setError('')
        // login api call
        // On successful login, navigate to the dashboard
        navigate('/dashboard')
    }
    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
                <p className='text-xs text-slate-700 mt-[5px] mb-6'> Please enter your details to log In</p>
                <form onSubmit={handlelogin}>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='@gmail.com'
                        label="Email Address"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        label="Password"
                    />
                    {error && <p className='text-red-500 text-sm pb-2.5'>{error}</p>
                    }
                    <button type='submit' className='btn-primary'>Log In</button>
                    <p className='text-slate-800 mt-3'>Don't have an account? <Link to="/signup" className='text-primary font-medium underline'>Sign Up</Link></p>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login