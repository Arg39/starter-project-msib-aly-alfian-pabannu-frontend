import React from 'react'

export default function Profile() {
  return (
    <div className="bg-black w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 pb-64 text-sm border-r border-white top-12">
            <div className='flex justify-center mb-8'>
                <img src="logo.png" className='filter: invert h-8' alt="" /> 
                <p className='text-white text-2xl font-bold ml-2'>Chocofee</p>
            </div>
          <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-black border rounded-full"> Profile Page </a>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold text-white hover:text-zinc-400 hover:border hover:rounded-full">
            Management Product
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold text-white hover:text-zinc-400 hover:border hover:rounded-full">
            Sales Account
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold text-white hover:text-zinc-400 hover:border hover:rounded-full">
            Main Information
          </a>
        </div>
      </aside>
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl text-white">Profile Page</h2>
            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-white"
                  src="profile.png"
                  alt="Bordered avatar" />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button type="button"
                    className="py-3.5 px-7 text-base font-medium text-black focus:outline-none bg-zinc-400 rounded-lg border border-white hover:bg-zinc-500 focus:bg-zinc-600 ">
                    Change picture
                  </button>
                  <button type="button"
                    className="py-3.5 px-7 text-base font-medium text-black focus:outline-none bg-white rounded-lg border border-white hover:bg-zinc-100 focus:bg-zinc-300 ">
                    Edit Information Profile
                  </button>
                </div>
              </div>
              <div className="items-center mt-8 sm:mt-14 text-white">
                <div className="mb-2 sm:mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <span className="bg-white border border-zinc-600 text-black text-sm font-medium rounded-lg p-2.5 block w-full">name</span>
                </div>
                <div className="mb-2 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <span className="bg-white border border-zinc-600 text-black text-sm font-medium rounded-lg p-2.5 block w-full">email</span>
                </div>
                <div className="mb-2 sm:mb-6">
                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-white">Your Address</label>
                    <span className="bg-white border border-zinc-600 text-black text-sm font-medium rounded-lg p-2.5 block w-full">address</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
