import { useRouter } from 'next/router'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

export default function UserInfo({ next , previous }) {
    const router = useRouter()
    return (
        <div className=" flex flex-col space-y-16 p-5 md:w-1/3">
            <div className="flex flex-col space-y-1">
                <h3 className="text-2xl font-medium leading-relaxed text-gray-700">Complete registration.</h3>
                <p className="text-sm text-gray-400 font-light">Please enter your fill-in details to complete registration.</p>
            </div>
            <div className="flex flex-col space-y-10">
                <div className="flex  space-x-2">
                    <div className="flex-1 flex flex-col space-y-2">
                        <label className='text-sm text-gray-500 font-light'>First Name</label>
                        <div className="flex-1 flex">
                            <input type="text" className="border-b pb-2 flex-1" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col space-y-2">
                        <label className='text-sm text-gray-500 font-light'>Last Name</label>
                        <div className="flex-1 flex">
                            <input type="text" className="border-b pb-2 flex-1" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                    <label className='text-sm text-gray-500 font-light'>Date of Birth</label>
                    <div className="flex-1 flex">
                        <input type="date" className="border-b pb-2 flex-1" placeholder="Last Name" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end">

            <button onClick={()=>router.push('/feeds')} className="bg-gray-100 flex space-x-5 w-fit rounded-full text-sm px-5 py-4 font-medium">
            <p>Continue</p>
            <HiArrowRight size={18} />
        </button>

            </div>
        </div>
    )
}


