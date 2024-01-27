import React, { useState } from 'react'
import { HiX } from 'react-icons/hi';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi2';

export default function AddToCart({ close }) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div onClick={close} className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 flex md:items-center justify-center">
            <div onClick={e=>{e.stopPropagation()}} className="md:w-4/6 bg-white md:h-3/4 flex flex-col md:flex-row rounded">
                <div className="md:w-1/2  flex-col space-y-2 hidden md:flex  p-10">
                    <h3 className='font-bold text-3xl'>Sweet Black Pepper Snackin' Bacon</h3>
                    <p className='text-sm font-medium'>$13.85</p>

                    <div className="pt-5 flex flex-1 overflow-hidden">
                        <div className="flex-1 pt-10 flex overflow-hidden">
                            <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />

                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 p-10  border-l flex flex-col space-y-5 overflow-hidden overflow-y-auto">
                    <div className="flex flex-col space-y-5">
                        <button onClick={() => close()} className='bg-gray-100 p-2 w-fit rounded-full md:hidden top-0 sticky'>
                            <HiX size={20} />
                        </button>
                        <div className="h-60 w-full flex overflow-hidden md:hidden">
                            <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />

                        </div>
                        <h3 className='font-bold text-3xl md:hidden'>Sweet Black Pepper Snackin' Bacon</h3>
                        <p className='text-sm font-medium md:hidden'>$13.85</p>
                        <p className='text-sm font-light leading-relaxed'>A nutritious fruit mix made with chopped pieces of red and green apples, mandarin orange segments, fresh strawberry slices, and blueberries, served chilled. Prepared fresh daily.</p>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div className="flex flex-col space-y-3 border-b-2 pb-5">
                            <h3 className='font-bold text-xl text-gray-600'>Spice it up</h3>
                            <p className='font-light text-sm text-gray-500'>Choose as many times as you like to spice your eating.</p>
                        </div>
                        <div className='flex flex-col flex-1 space-y-3'>
                            <div className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium">Fried Fish - Red Fish</p>
                                    <p className='text-sm font-light'>$3.85</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiMinusCircle size={18} />
                                    </button>
                                    <p className='text-sm font-light'>0</p>
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiPlusCircle size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium">Fried Fish - Tilapia</p>
                                    <p className='text-sm font-light'>$3.85</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiMinusCircle size={18} />
                                    </button>
                                    <p className='text-sm font-light'>0</p>
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiPlusCircle size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium">Pepper (Green) - Kpakpo Shito</p>
                                    <p className='text-sm font-light'>$0.85</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiMinusCircle size={18} />
                                    </button>
                                    <p className='text-sm font-light'>0</p>
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiPlusCircle size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium">Pepper (Green) - Kpakpo Shito</p>
                                    <p className='text-sm font-light'>$0.85</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiMinusCircle size={18} />
                                    </button>
                                    <p className='text-sm font-light'>0</p>
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiPlusCircle size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium">Banku</p>
                                    <p className='text-sm font-light'>$1.55</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiMinusCircle size={18} />
                                    </button>
                                    <p className='text-sm font-light'>0</p>
                                    <button className='hover:bg-gray-100 p-2 hover:rounded-full'>
                                        <HiPlusCircle size={18} />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div>
                            <select value={quantity} onChange={e => setQuantity(e.target.value)} className='bg-gray-100 rounded-full px-2 py-1'>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                        </div>

                        <button className='bg-black text-white font-medium p-4 rounded-md'>
                            Add {quantity} to cart $590.00
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
