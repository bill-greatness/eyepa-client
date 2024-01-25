import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa6'


export default function Footer() {
    return (
        <footer className='bg-white pt-10 pb-10'>
            <div className='container mx-auto flex py-10 flex-col space-y-10 md:space-y-0 md:flex-row px-5 md:px-0'>
                <div className='md:w-1/4 flex flex-col space-y-3'>
                    <Image
                        className='rounded-xl'
                        src="/assets/logo.png"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                    <div className='flex flex-col space-y-2'>

                    </div>
                </div>

                <div className='md:w-1/4 flex flex-col space-y-3'>
                    <h2 className='font-medium'>Bolt</h2>
                    <div className='flex flex-col space-y-2 text-gray-400 font-light'>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Suppliers</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Terms & Conditions</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Privacy</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Cookies</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Security</a>
                    </div>
                </div>
                <div className='md:w-1/4 flex flex-col space-y-3'>
                    <h2 className='font-medium'>Partner with Bolt</h2>

                    <div className='flex flex-col space-y-2 text-gray-400 font-light'>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Suppliers</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Terms & Conditions</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Privacy</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Cookies</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Security</a>
                    </div>
                </div>
                <div className='md:w-1/4 flex flex-col space-y-3'>
                    <h2 className='font-medium'>Company</h2>
                    <div className='flex flex-col space-y-2 text-gray-400 font-light'>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Suppliers</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Terms & Conditions</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Privacy</a>

                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Cookies</a>
                        <a className='hover:text-green-600 text-lg md:text-sm' href='#'>Security</a>
                    </div>
                </div>

            </div>
            <div className='flex items-center container mx-auto justify-center md:justify-between border-t md:border-t-0 md:border-b py-5'>
                <div className='flex items-center  space-x-3'>
                    <button className='bg-gray-200 p-3 rounded-full'>
                        <FaFacebook />
                    </button>
                    <button className='bg-gray-200 p-3 rounded-full'>
                        <FaTwitter />
                    </button>
                    <button className='bg-gray-200 p-3 rounded-full'>
                        <FaInstagram />
                    </button>
                    <button className='bg-gray-200 p-3 rounded-full'>
                        <FaLinkedin />
                    </button>
                    <button className='bg-gray-200 p-3 rounded-full'>
                        <FaTiktok />
                    </button>
                </div>
                <div className='md:flex items-center space-x-5  hidden'>
                    <button className='bg-gray-200 px-5 text-sm font-medium text-gray-500 rounded-full py-2'>
                        Get the Eyepa App
                    </button>
                    <button className='bg-gray-200 px-5 text-sm font-medium text-gray-500 rounded-full py-2'>
                        Become a Partner
                    </button>
                </div>
            </div>
            <div className='flex items-center container mx-auto justify-center space-y-5 md:space-y-0 md:justify-between py-5 flex-col md:flex-row'>
                <p>© 2024 Eyepa Food</p>
                <div className='flex items-center justify-center space-x-5 text-gray-500 font-light flex-wrap px-10 md:px-0 leading-relaxed'>

                    <a className='hover:text-green-600' href='#'>Suppliers</a>
                    <a className='hover:text-green-600' href='#'>Terms & Conditions</a>

                    <a className='hover:text-green-600' href='#'>Privacy</a>

                    <a className='hover:text-green-600' href='#'>Cookies</a>
                    <a className='hover:text-green-600' href='#'>Security</a>
                </div>
            </div>
        </footer>
    )
}
