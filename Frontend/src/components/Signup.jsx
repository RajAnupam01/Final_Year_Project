import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/Signup", { name, email, password, address, gender })
            .then(result => {
                console.log(result);
                navigate('/Login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-indigo-500'>
            <div className='bg-white p-6 sm:p-24 rounded-lg shadow-2xl shadow-black w-full max-w-lg sm:max-w-2xl  sm:hover:translate-x-20 transition duration-300 ease-in-out'>
                <h2 className='text-center text-2xl sm:text-4xl font-bold mb-6'>Signup</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-lg font-medium'>Name</label>
                        <input 
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            id='name'
                            required
                            className='w-full border p-2 rounded-md text-lg '
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-lg font-medium'>Email</label>
                        <input 
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            id='email'
                            required
                            className='w-full border p-2 rounded-md text-lg'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-lg font-medium'>Password</label>
                        <input 
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            id='password'
                            required
                            className='w-full border p-2 rounded-md text-lg'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="address" className='block text-lg font-medium'>Address</label>
                        <input 
                            type="text"
                            placeholder='Enter Address'
                            name='address'
                            id='address'
                            required
                            className='w-full border p-2 rounded-md text-lg'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium'>Gender</label>
                        <div className='flex gap-4 mt-1'>
                            <label className='text-sm'>
                                <input 
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                /> Male
                            </label>
                            <label className='text-sm'>
                                <input 
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                /> Female
                            </label>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className=' bg-gradient-to-r from-indigo-500 to-purple-100 
                       hover:from-purple-100 hover:to-indigo-500  text-black w-full p-2 rounded-md text-lg  '>
                        Register
                    </button>
                </form>

                <p className='text-center mt-3 text-lg'>
                    Already have an account? <Link to={"/Login"} className='text-emerald-600 hover:underline'>Login</Link> 
                </p>
            </div>
        </div>
    );
}

export default Signup;
