import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

export default function TwoFa({ next, previous }) {
    return (
        <div className=" flex">

            <div className="flex flex-col flex-1 p-5 space-y-10 ">
                <div className="font-medium flex flex-col space-y-1  leading-relaxed">
                    <h3 className="text-xl">Enter the 4-digit code sent to you at:</h3>
                    <h3 className="text-xl">email@domain.com</h3>
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-3">
                        <input className="w-12 h-12 rounded-md font-medium bg-gray-100 text-xl text-center" placeholder="*" />
                        <input className="w-12 h-12 rounded-md font-medium bg-gray-100 text-xl text-center" placeholder="*" />
                        <input className="w-12 h-12 rounded-md font-medium bg-gray-100 text-xl text-center" placeholder="*" />
                        <input className="w-12 h-12 rounded-md font-medium bg-gray-100 text-xl text-center" placeholder="*" />
                    </div>
                    <p className="text-xs text-gray-500">Tip: Make sure to check your inbox and spam folders</p>
                </div>
                <button className="bg-gray-100 w-fit rounded-full text-sm px-3 py-2 font-medium">
                    Resend
                </button>
                <div className="flex-1">

                </div>
                <div className="flex items-center justify-between font-medium">
                    <button onClick={previous} className="bg-gray-100 w-fit rounded-full text-sm px-4 py-4 font-medium">
                        <HiArrowLeft size={18} />
                    </button>
                    <button onClick={next} className="bg-gray-100 flex space-x-5 w-fit rounded-full text-sm px-5 py-4 font-medium">
                        <p>Next</p>
                        <HiArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}
