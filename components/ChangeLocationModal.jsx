import React from 'react'
import { HiLocationMarker, HiX } from 'react-icons/hi';

export default function ChangeLocationModal({close}) {
  return (
    <div onClick={() => close()}  className="absolute top-0 -left-10 right-0 bottom-0 bg-black/20 flex md:items-center md:justify-center z-10">
    <div onClick={(e) => {e.stopPropagation();}} className="w-full md:w-2/6 flex p-10 pl-20 md:pl-10  flex-col space-y-5 rounded-md shadow-lg border border-gray-100 bg-white md:mx-auto h-full md:h-2/4">
        <button onClick={() => close()} className='bg-gray-100 p-2 w-fit rounded-full'>
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
</div>
  )
}
