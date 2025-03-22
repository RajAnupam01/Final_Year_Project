import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

            axios.post('http://localhost:3000/Login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.role === "admin") {
                    localStorage.setItem("user", JSON.stringify(result.data));
                    navigate('/LandingPage2')
                }
                else if(result.data.role === "user"){
                    localStorage.setItem("user", JSON.stringify(result.data));
                    navigate('/LandingPage')
                }
                else {
                    alert("Wrong Credentials..")
                }
            })
            .catch(err => console.log(err))
        
    }
    return (
        <div className='px-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 '>
            <div className=' sm:p-24 p-5 rounded bg-white shadow-2xl shadow-black sm:hover:translate-y-20 transition duration-300 ease-in-out '>
                <h2 className='text-center sm:text-5xl text-3xl font-bold mb-5 sm:mb-10'>Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className='mb-5 '>
                        <label htmlFor="email">
                            <strong className='sm:text-xl text-lg'>Email</strong>
                        </label>
                        <input type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            id='email'
                            required
                            className='w-full rounded-0 sm:text-xl text-lg p-5'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="password">
                            <strong className='sm:text-xl text-lg'>Password</strong>
                        </label>
                        <input type="password"
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            id='password'
                            required
                            className='w-full rounded-0 sm:text-xl text-lg p-5'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-gradient-to-l from- to-teal-500 hover:bg-gradient-to-r from-indigo-500 w-full text-white sm:text-xl text-lg p-5'>
                        Login
                    </button>

                </form>
                <p className='text-center mt-2'>Don't have an account? <Link to={"/"} className='text-emerald-600'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login