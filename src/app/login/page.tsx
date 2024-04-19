import Link from 'next/link'
import React from 'react'

export default function register() {
    
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-700">
                <div className="bg-black w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded-xl">
                    <div className='flex justify-center'>
                        <img src="logo.png" className='filter: invert h-10' alt="" /> 
                        <p className='text-white text-3xl font-bold ml-2'>Chocofee</p>
                    </div>
                    <div className="text-white pb-4 text-2xl font-medium flex justify-center mt-4 mb-4">Login</div>
                    <div>
                        <label htmlFor="username" className="block text-white font-bold text-sm mb-1">Username :</label>
                        <input className="block text-gray-700 p-1 mt-0 m-2 ml-0 w-full rounded text-lg font-light  " id="username" type="text"  />
                    </div>
                    <div className='mt-2'>
                    <label htmlFor="password" className="block text-white font-bold text-sm mb-1">Password :</label>
                    <div className="relative">
                        <input className="block text-gray-700 p-1 mt-0 m-4 ml-0 w-full rounded text-lg font-light" id="password" type="password" />
                        {/* <button onClick={togglePasswordVisibility}>Toggle Password</button> */}
                    </div>
                </div>
                    <div className='flex justify-end'>
                        <button className="inline-block mt-2 bg-white hover:bg-zinc-400 focus:bg-zinc-600 px-6 py-2 rounded text-black shadow-lg font-extrabold">Login</button>
                    </div>
                    <div className="pt-8 flex items-center justify-between">
                        <a href="#forgot-pass" className="inline-block text-white hover:text-zinc-600 align-baseline font-normal text-sm" > Forgot password?</a>
                        <Link href="/register" passHref>
                          <p className="inline-block text-white hover:text-zinc-600 font-normal text-sm"> Create an account? </p>
                        </Link>
                    </div>
                </div>
                <p className="mt-4 text-center text-gray-400 text-xs"> &copy;2024 : PT Otak Kanan. Alfian Pabannu. </p>
            </div>
            {/* <div>register page</div>
            <input type="text" name='username' placeholder='username' />
            <input type="password" name='password' placeholder='password' /> */}
        </div>
    )
}
