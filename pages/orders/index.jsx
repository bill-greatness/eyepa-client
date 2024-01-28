import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { HiCalendar } from 'react-icons/hi'
import { LuSearch, LuVegan } from 'react-icons/lu'
import { IoTriangleSharp } from 'react-icons/io5'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi2'
import { useRouter } from 'next/router'


const dateFilters = [
    "This month",
    "This Quater",
    "This year",
    "All time"
]

export default function Orders() {
    const [showDateSortModal, setShowDateSortModal] = useState(false)
    const [dateFilter, setDateFilter] = useState(dateFilters[0])


    const router = useRouter()
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden overflow-y-auto">

            <Header />
            <div className="border-b pb-3 px-5 md:px-0">
                <div className="container mx-auto flex items-center space-y-5 md:space-y-0 flex-col md:flex-row md:space-x-10 ">
                    <div className="flex items-center space-x-3 md:w-1/4 justify-between w-full">
                        <div onClick={() => setShowDateSortModal(true)} className="flex items-center space-x-5 flex-1">
                            <div className="flex items-center space-x-3">
                                <div className="bg-gray-100 p-2 rounded-full">
                                    <HiCalendar size={20} color="gray" />
                                </div>
                                <div className="cursor-pointer min-w-32">
                                    <p className="text-xs text-gray-400">Sort Date</p>
                                    <p>{dateFilter}</p>

                                </div>
                            </div>
                            <IoTriangleSharp size={10} color="gray" className='rotate-180' />
                        </div>
                    </div>

                    <div className="bg-gray-100 p-5 w-full md:w-[50vw] rounded-md flex items-center space-x-5">
                        <LuSearch size={18} color={"gray"} />
                        <input type="text" className="bg-transparent flex-1" placeholder="Search Order ID or Number" />
                    </div>

                </div>
            </div>

            <div className="container mx-auto py-10">
                <div className='flex flex-col space-y-8 px-5 md:px-0'>

                    <h3 className='text-2xl'>Active Orders</h3>

                    <div className='bg-gray-100/70 min-h-40 rounded-lg flex flex-col space-y-2 items-center justify-center'>
                        <LuVegan size={30} color='gray' />
                        <p className='text-gray-500 text-sm'>You currently have no running orders</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                        <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                            <div className='md:min-h-40 border-b md:border md:rounded-lg  flex items-center overflow-hidden'>
                                <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                    <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                    <p className='text-sm font-light'>$13.85</p>
                                    <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                    <div className='flex items-center space-x-2'>
                                        <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                        <p className='text-xs bg-gray-300 w-fit text-gray-900 px-3 py-1 rounded-full'>In progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                            <div className='md:min-h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                                <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                    <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                    <p className='text-sm font-light'>$13.85</p>
                                    <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                    <div className='flex items-center space-x-2'>
                                        <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                        <p className='text-xs bg-gray-300 w-fit text-gray-900 px-3 py-1 rounded-full'>In progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                            <div className='md:min-h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                                <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                    <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                    <p className='text-sm font-light'>$13.85</p>
                                    <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                    <div className='flex items-center space-x-2'>
                                        <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                        <p className='text-xs bg-gray-300 w-fit text-gray-900 px-3 py-1 rounded-full'>In progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex items-start md:space-x-3 container mx-auto py-10'>

                <div className='w-full md:w-full flex-col space-y-16'>

                    <div className='flex flex-col space-y-8 px-5 md:px-0'>

                        <h3 className='text-2xl'>This month's orders</h3>

                        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                            <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                                <div className='md:min-h-40 border-b md:border md:rounded-lg  flex items-center overflow-hidden'>
                                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                        <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                        <p className='text-sm font-light'>$90.85</p>
                                        <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                        <div className='flex items-center space-x-2'>
                                            <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                            <button title='Order delivered'>
                                                <HiCheckCircle size={20} color="green" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                                <div className='md:min-h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                        <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                        <p className='text-sm font-light'>$259.85</p>
                                        <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                        <div className='flex items-center space-x-2'>
                                            <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                            <button title='Order delivered'>
                                                <HiCheckCircle size={20} color="green" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => router.push('/orders/4')} className=' cursor-pointer' >

                                <div className='md:min-h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                                        <h3 className='leading-loose text-sm md:text-lg'>Order A89834GW90</h3>
                                        <p className='text-sm font-light'>$45.85</p>
                                        <p className='text-sm font-light text-gray-400 '>Chick-fil-A Chick-n-Mini x 2 & Chick-fil-A Chick-n-Max x 5 & Banku with Fried Fish</p>
                                        <div className='flex items-center space-x-2'>
                                            <p className='text-xs bg-yellow-300 w-fit text-yellow-900 px-3 py-1 rounded-full'>Yesterday</p>
                                            <button title='Order cancelled'>
                                                <HiXCircle size={20} color="red" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {showDateSortModal && <div onClick={()=>setShowDateSortModal(false)} className='bg-black/20 flex absolute top-0 left-0 bottom-0 right-0'>
                <div className='flex container mx-auto flex-1 relative'>

                    <div onClick={e=>{e.stopPropagation();}} className='bg-white w-60 ml-5 md:ml-0 min-h-40 transition-all flex flex-col rounded-md absolute top-40 p-5 space-y-3 overflow-hidden'>
                        {
                            dateFilters.map((data, index) =>
                                <p onClick={()=>{
                                    setDateFilter(data);
                                    setShowDateSortModal(false);
                                }} className=' text-gray-600 transition-all cursor-pointer hover:bg-gray-100 hover:p-2 hover:rounded-md' key={index}>{data}</p>
                            )
                        }
                    </div>

                </div>
            </div>}

            <Footer />
        </div>
    )
}
