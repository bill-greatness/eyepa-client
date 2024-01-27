import React from 'react'

export default function FoodInfo({ close }) {
  return (
    <div onClick={close} className="bg-black/40 flex items-center justify-center absolute top-0 left-0 bottom-0 right-0">
      <div onClick={e => { e.stopPropagation(); }} className="w-3/5 h-3/5 bg-white flex">
        <div className="flex-1 flex  m-10 overflow-hidden">
          <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
        </div>
        <div className="flex-1 flex flex-col space-y-3 py-10 pr-10">
          <h3 className='font-bold text-2xl'>Fruit Cup</h3>
          <p className='text-sm font-light leading-relaxed'>A nutritious fruit mix made with chopped pieces of red and green apples, mandarin orange segments, fresh strawberry slices, and blueberries, served chilled. Prepared fresh daily.</p>
          <p className='text-sm font-medium'>$13.85</p>

          <div className='pt-5'>
            <button className='border text-sm font-medium border-yellow-400 bg-yellow-400 w-full p-4 rounded-md'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
