import React, { useState } from 'react'
import { HiLocationMarker, HiShoppingCart, HiX } from 'react-icons/hi'
import { LuSearch, LuShoppingCart } from 'react-icons/lu'

export default function SearchComponent() {
    const [showChartModal, setShowChartModal] = useState(false)
    const [showChangeLocationModal, setShowChangeLocationModal] = useState(false)
    return (
        <div className="border-b pb-3 px-5 md:px-0">
            <div className="container mx-auto flex items-center flex-col md:flex-row md:space-x-10 ">
                <div className="flex items-center space-x-3 md:w-1/4 justify-between w-full">
                    <div className="flex items-center space-x-3 flex-1">
                        <div className="bg-gray-100 p-2 rounded-full">
                            <HiLocationMarker size={20} color="gray" />
                        </div>
                        <div  onClick={() => setShowChangeLocationModal(true)} className="cursor-pointer">
                            <p className="text-xs text-gray-400">Current Location</p>
                            <p>Accra - Spintex Road</p>
                        </div>
                    </div>
                    <div className='w-1/4 p-5 md:hidden'>
                        <button className=" text-gray-400 p-3 rounded-md relative flex space-x-2">
                            <LuShoppingCart size={20} />
                            <p>Cart</p>
                            <div className="text-xs text-white bg-yellow-500 absolute -top-3 rounded-full border h-5 w-5 right-0">3</div>
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 p-5 w-full md:w-[50vw] rounded-md flex items-center space-x-5">
                    <LuSearch size={18} color={"gray"} />
                    <input type="text" className="bg-transparent flex-1" placeholder="Search Food and Restaurants" />
                </div>
                <div className='w-1/4 p-5 hidden md:flex'>
                    <button onClick={() => setShowChartModal(true)} className="bg-black text-white p-3 rounded-md relative flex space-x-2">
                        <LuShoppingCart size={20} />
                        <p>Cart</p>
                        <div className="text-xs text-white bg-yellow-500 absolute -top-3 rounded-full border h-5 w-5 right-0">3</div>
                    </button>
                </div>

                {showChangeLocationModal && <div onClick={() => setShowChangeLocationModal(false)}  className="absolute top-0 -left-10 right-0 bottom-0 bg-black/20 flex md:items-center md:justify-center z-10">
                    <div onClick={(e) => {e.stopPropagation();}} className="w-full md:w-2/6 flex p-10 pl-20 md:pl-10  flex-col space-y-5 rounded-md shadow-lg border border-gray-100 bg-white md:mx-auto h-full md:h-2/4">
                        <button onClick={() => setShowChangeLocationModal(false)} className='bg-gray-100 p-2 w-fit rounded-full'>
                            <HiX size={18} />
                        </button>
                        <div className="flex flex-col space-y-4 flex-1">
                            <h3 className="font-medium text-3xl ">Delivery details</h3>
                            {/* searching loaction */}
                            <div className=" w-full p-3 bg-gray-100 rounded-md border border-gray-100 flex items-center space-x-2 px-3">
                                <HiLocationMarker size={20} color="gray" />
                                <input type="text" className="placeholder:text-gray-500 flex-1 py-3 md:py-2 bg-transparent" placeholder='Enter Location' />
                            </div>
                            {/* selected location */}
                            <div className=" w-full p-3 rounded-md  flex items-center space-x-5 px-3">
                                <HiLocationMarker size={30} color="gray" />
                                <div className="border-b flex-1 pb-2">
                                    <p className="font-medium text-sm">Anaji - Sekondi</p>
                                    <p className="font-light text-sm">Ghana</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-black py-4 rounded-lg text-white font-medium">
                            Done
                        </button>
                    </div>
                </div>}

                {showChartModal && <div className='absolute flex top-0 -left-10 right-0 bottom-0 z-10'>
                    <div onClick={() => setShowChartModal(false)} className='container mx-auto flex-1 relative'>
                        {/* cart modal */}
                        <div onClick={(e) => { e.stopPropagation(); }} className='absolute flex flex-col w-2/6 min-h-64 bg-white border border-gray-100 rounded-md right-0 top-48 z-10 p-5'>
                            <button onClick={() => setShowChartModal(false)} className='bg-gray-100 p-2 w-fit rounded-full'>
                                <HiX size={18} />
                            </button>
                            <div className="flex flex-1 flex-col items-center justify-center space-y-1">
                                <HiShoppingCart size={60} color='gray' />
                                <p className='text-center w-2/3 text-sm text-gray-400 leading-relaxed'>Add items from a restaurant or store to start a new cart</p>
                            </div>
                        </div>

                    </div>
                </div>}
            </div>
        </div>
    )
}
