import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchComponent from '../../components/SearchComponent'
import { IoAdd } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa6'
import { HiHeart } from 'react-icons/hi2'
import { useRouter } from 'next/router'
import AddToCart from '../../components/AddToCart'
import FoodInfo from '../../components/FoodInfo'
const stores = [
  {
    name: 'Strictly Angwamo Oil Rice',
    estimatedTime: [20, 40],
    rating: 4.5,
    banner: "https://images.bolt.eu/store/2022/2022-05-26/f0470c17-449f-4ed2-9461-b554135380ab.jpeg"
  },
  {
    name: 'Licking Waakye',
    estimatedTime: [20, 40],
    rating: 4.5,
    banner: "https://images.bolt.eu/store/2023/2023-10-21/a8620a49-6364-458e-8cb2-73c487a4b45f.jpeg"
  },
  {
    name: 'Kenkey Boutique',
    estimatedTime: [20, 40],
    rating: 4.5,
    banner: "https://images.bolt.eu/store/2021/2021-11-25/d91b649e-616a-42c0-a5c4-db67433e7004.jpeg"
  },
  {
    name: 'Sushi Koyoto',
    estimatedTime: [20, 40],
    rating: 4.5,
    banner: "https://images.bolt.eu/store/2023/2023-05-25/68f3e944-6b6b-4be5-b39f-3704ba7825e7.jpeg"
  },
  {
    name: 'Dunkins',
    estimatedTime: [20, 40],
    rating: 4.5,
    banner: "https://images.bolt.eu/store/2020/2020-12-09/3f0a90f7-fa5c-4d1e-8e01-f1de04003c24.jpeg"
  }
]

export default function Favorites() {
  const [openAddToCart, setOpenAddToCart] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)
  const router = useRouter()
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      <SearchComponent />
      <div className="flex-1 flex py-10">
        <div className='flex items-start md:space-x-3 container mx-auto'>
          <div className='hidden w-1/4 text-lg md:flex flex-col space-y-5 text-gray-500 sticky top-10'>
            <div className='flex items-center cursor-pointer justify-between pr-10'>
              <h3 className='cursor-pointer'>Restaurant</h3>
              <p className='font-medium text-sm'>({stores.length})</p>
            </div>
            <div className='flex items-center cursor-pointer justify-between pr-10'>
              <h3 className='cursor-pointer'>Foods</h3>
              <p className='font-medium text-sm'>({3})</p>
            </div>
          </div>
          <div className='w-full md:w-3/4 flex-col space-y-16'>

            <div className='flex flex-col space-y-8 px-5 md:px-0'>

              <h3 className='text-2xl'>Favourite Restaurant</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
                {stores.map((store, idx) => <div onClick={() => router.push('/store/' + idx)} key={`store-${idx}`} className='flex flex-col space-y-3 cursor-pointer shrink-0'>
                  <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                    <img alt={`${store.image}_banner`} className="flex-1 object-cover" src={store.banner} />

                    <button onClick={(e) => { e.stopPropagation(); }} className='absolute top-4 right-4 hover:bg-white/50 p-1 rounded-full transition-all'>
                      <HiHeart size={20} color="red" />
                    </button>
                  </div>
                  <div className='flex flex-row items-start justify-between'>
                    <div className='flex flex-col space-y-1'>
                      <h3 className='font-medium'>{store.name}</h3>
                      <p className='font-light text-gray-600'> {store.estimatedTime[0]}–{store.estimatedTime[1]} min</p>
                    </div>
                    <div className='h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex text-xs'>
                      4.5
                    </div>
                  </div>
                </div>
                )}
              </div>

            </div>

            <div className='flex flex-col space-y-8 px-5 md:px-0'>

              <h3 className='text-2xl'>Favourite Foods</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div onClick={() => setSelectedFood(1)} className='' >

                  <div className='md:h-40 border-b md:border md:rounded-lg  flex items-center overflow-hidden'>
                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                      <h3 className='leading-loose text-sm md:text-lg'>Chick-fil-A Chick-n-Minis™ Meal</h3>
                      <p className='text-sm font-light'>$13.85</p>
                      <p className='text-sm font-light text-gray-400 '>Bite-sized pieces of tender all breast meat chicken, seasoned to perfection</p>
                    </div>
                    <div className='h-24 w-24 md:h-40 bg-gray-100 md:w-40 flex relative overflow-hidden'>
                      <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/85c9bdbd7500311ecf28d8c648c941e6/a19bb09692310dfd41e49a96c424b3a6.jpeg" />
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={30} />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div onClick={() => setSelectedFood(1)} className='' >

                  <div className='md:h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                      <h3 className='leading-loose text-sm md:text-lg'>Chick-fil-A Chick-n-Minis™ Meal</h3>
                      <p className='text-sm font-light'>$13.85</p>
                      <p className='text-sm font-light text-gray-400 '>Bite-sized pieces of tender all breast meat chicken, seasoned to perfection</p>
                    </div>
                    <div className='h-24 w-24 md:h-40 bg-gray-100 md:w-40 flex relative overflow-hidden'>
                      <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={30} />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div onClick={() => setSelectedFood(1)} className='' >

                  <div className='md:h-40  border-b md:border md:rounded-lg   flex items-center overflow-hidden'>
                    <div className='flex-1 h-full p-5 flex flex-col space-y-2 overflow-hidden'>
                      <h3 className='leading-loose text-sm md:text-lg'>Chick-fil-A Chick-n-Minis™ Meal</h3>
                      <p className='text-sm font-light'>$13.85</p>
                      <p className='text-sm font-light text-gray-400 '>Bite-sized pieces of tender all breast meat chicken, seasoned to perfection</p>
                    </div>
                    <div className='h-24 w-24 md:h-40 bg-gray-100 md:w-40 flex relative overflow-hidden'>
                      <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={30} />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setOpenAddToCart(true) }} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                        <IoAdd size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      {openAddToCart && <AddToCart close={() => setOpenAddToCart(false)} />}
      {selectedFood && <FoodInfo close={() => setSelectedFood(null)} />}

      <Footer />
    </div>
  )
}
