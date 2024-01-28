import React from 'react'
import { HiShoppingCart, HiX } from 'react-icons/hi';

export default function CartModal({ close }) {
    return (
        <div className='absolute flex top-0 -left-10 right-0 bottom-0 z-10'>
            <div onClick={() => close()} className='container mx-auto flex-1 relative'>
                {/* cart modal */}
                <div onClick={(e) => { e.stopPropagation(); }} className='absolute flex flex-col md:w-2/6 bottom-0 md:bottom-auto md:min-h-64 bg-white border border-gray-100 rounded-md right-0 top-48 z-10 p-5'>
                    <button onClick={() => close()} className='bg-gray-100 p-2 w-fit rounded-full'>
                        <HiX size={18} />
                    </button>
                    <div className="flex flex-1 flex-col items-center justify-center space-y-1">
                        <HiShoppingCart size={60} color='gray' />
                        <p className='text-center w-2/3 text-sm text-gray-400 leading-relaxed'>Add items from a restaurant or store to start a new cart</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
