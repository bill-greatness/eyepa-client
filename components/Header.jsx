import React from 'react'
import Image from 'next/image'
import { IoTriangleSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'

export default function Header() {
  return (
    <header className="py-3 ">
                <div className="flex items-center justify-between container mx-auto px-5 md:px-0">
                    <div>
                        <Image
                            className='rounded-xl'
                            src="/assets/logo.png"
                            width={80}
                            height={100}
                            alt="logo"
                        />
                        {/* <h3 className="font-bold text-gray-600 text-xl">Eyepa Meal.</h3> */}
                    </div>
                    <div className="flex items-center space-x-10 text-gray-500">
                        <button className="items-center space-x-3 hidden md:flex">
                            <div className="flex items-center space-x-2">
                                <img alt='flag_image' className="h-4" src="https://hatscripts.github.io/circle-flags/flags/gh.svg" />
                                <p className="text-gray-500">Ghana</p>
                            </div>
                            <IoTriangleSharp size={10} color="gray" className='rotate-180' />
                        </button>
                        <button className='hidden md:flex'>
                            <p className="font-medium text-gray-700">Support</p>
                        </button>
                        <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hidden md:flex">
                            <p>Sign up</p>
                        </button>
                        <button>
                            <FaBars size={20} color="black" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between container mx-auto">

                </div>
            </header>
  )
}
