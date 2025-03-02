import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Login',{email,password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/Landingpage')
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='px-4 flex justify-center items-center min-h-screen '>
        <div className='bg-white sm:p-24 p-5 rounded shadow-2xl shadow-black '>
            <h2 className='text-center sm:text-5xl text-3xl font-bold sm:mb-10'>Login</h2>
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
                    className='w-full rounded-0 sm:text-xl text-lg p-5'
                    onChange={(e)=> setEmail(e.target.value)}
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
                    className='w-full rounded-0 sm:text-xl text-lg p-5'
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                 </div>
                <button type='submit' className='bg-emerald-600 w-full sm:text-xl text-lg p-5'>Login</button>
            </form>
            <p className='text-center mt-2'>Don't have an account?</p>
        </div>
    </div>
  )
}

export default Login