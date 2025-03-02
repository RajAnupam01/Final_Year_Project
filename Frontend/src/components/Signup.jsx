import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import  axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
   const [name,setName] = useState()
   const [email,setEmail] = useState()
   const [password,setPassword] = useState()
   const navigate = useNavigate()
   
   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3001/Signup",{name,email,password})
    .then(result => {console.log(result)
        navigate('/Login')
    })
    .catch(err => console.log(err))
   }

  return (
    <div className='px-4 flex justify-center items-center min-h-screen '>
        <div className='bg-white sm:p-24 p-5 rounded shadow-2xl shadow-black '>
            <h2 className='text-center sm:text-5xl text-3xl font-bold sm:mb-10'>Signup</h2>
            <form onSubmit={handleSubmit} >
                <div className='mb-5'>
                    <label htmlFor="name">
                        <strong className='sm:text-xl text-lg'>Name</strong>
                    </label>
                     <input type="text"
                     placeholder='Enter Name'
                     autoComplete='off'
                     name='name'
                     id='name'
                     className='w-full rounded-0 sm:text-xl text-lg p-5'
                     onChange={(e) => setName(e.target.value)}
                     />
                </div>

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
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                 
                 <div className='mb-5'>
                    <label htmlFor="password">
                        <strong className='sm:text-xl text-lg'>Password</strong>
                    </label>
                    <input type="password"
                    placeholder='Enter Password'
                    name='password'
                    id='password'
                    className='w-full rounded-0 sm:text-xl text-lg p-5'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                 </div>
                <button type='submit' className='bg-emerald-600 w-full sm:text-xl text-lg p-5'>Register</button>
            </form>
            <p className='text-center mt-2'>Already have an Account? <Link to={"/Login"} className='text-emerald-600'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Signup