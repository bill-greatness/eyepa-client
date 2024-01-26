import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { LuSearch, LuShoppingCart } from 'react-icons/lu'

export default function SearchComponent() {
  return (
    <div className="border-b pb-3 px-5 md:px-0">
    <div className="container mx-auto flex items-center flex-col md:flex-row md:space-x-10">
        <div className="flex items-center space-x-3 md:w-1/4 justify-between w-full">
            <div className="flex items-center space-x-3 flex-1">
                <div className="bg-gray-100 p-2 rounded-full">
                    <HiLocationMarker size={20} color="gray" />
                </div>
                <div>
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
            <button className="bg-black text-white p-3 rounded-md relative flex space-x-2">
                <LuShoppingCart size={20} />
                <p>Cart</p>
                <div className="text-xs text-white bg-yellow-500 absolute -top-3 rounded-full border h-5 w-5 right-0">3</div>
            </button>
        </div>
    </div>
</div>
  )
}
