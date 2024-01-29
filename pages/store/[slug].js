import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../../components/Header'
import SearchComponent from '../../components/SearchComponent'
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Footer from '../../components/Footer'
import { IoAdd } from 'react-icons/io5';
import FoodInfo from '../../components/FoodInfo';
import AddToCart from '../../components/AddToCart';


const banner = "https://images.bolt.eu/store/2022/2022-05-26/f0470c17-449f-4ed2-9461-b554135380ab.jpeg"

const similar = [
    {
        title: 'Similar offers',
        stores: [
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
    },

]

const comments = [
    {
        user: "Ella K.",
        date: "2 years ago",
        message: "Amazing"
    },
    {
        user: "fahreta M.",
        date: "2 years ago",
        message: "Always Delicious"
    },
    {
        user: "Shafali P.",
        date: "2 years ago",
        message: "good"
    },
    {
        user: "Shikira F.",
        date: "2 years ago",
        message: "Food was amazing"
    },
    {
        user: "Damaris M.",
        date: "2 years ago",
        message: "Good food"
    },
    {
        user: "Yves N.",
        date: "2 years ago",
        message: "Food was delivered on time right temperature and was not missing anything extra requestd...."
    },
]




export default function Page() {
    const router = useRouter()

    const [openSimilar, setOpenSimilar] = useState(false)
    const [openAddToCart, setOpenAddToCart] = useState(false)
    const [selectedFood, setSelectedFood] = useState(null)
    const [deliveryMode, setDeliveryMode] = useState(true)



    console.log(router.query.slug)

    return <div className="w-screen h-screen bg-white overflow-hidden overflow-y-auto">
        <Header />
        <SearchComponent />

        <div className="h-60 bg-gray-500 flex relative overflow-hidden">

            <img alt="store_banner" className="flex-1 object-cover" src={banner} />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20">

                <div className="flex items-center space-x-3 justify-end p-4 container mx-auto">
                    <button className='bg-white p-2 rounded-full'>
                        <FaRegHeart size={20} color="gray" />
                    </button>
                    <button className='bg-white p-2 rounded-full'>
                        <SlOptions size={20} color="gray" />
                    </button>
                </div>

            </div>

        </div>

        <div className='container mx-auto'>
            <div className='py-10 flex flex-col space-y-2 px-5 md:px-0'>
                <h1 className='text-3xl font-medium text-gray-700'>Strictly Angwamo Oil Rice</h1>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center font-medium text-sm'>
                        <p>4.8</p> <MdStar />
                    </div>
                    <p className="text-sm text-gray-400 font-light">{"(10+)"}</p>
                    <p className='font-light text-gray-600'> 20–40 min</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pt-3 font-light">Chick-fil-A (144 Fulton St) is an excellently rated fast food chain in the Financial District of Manhattan. Known for its affordable prices, the restaurant is most popular in the evening. The top ordered items include the Chick-Fil-a Nuggets Meal, Spicy Chicken Sandwich Deluxe Meal, and Cobb Salad. Customers often order the Chick-Fil-a Nuggets Meal and Chick-Fil-a Sandwich Meal together. • ¢ • Fast Food • American • Breakfast and Brunch • Chicken</p>
                <div className="flex items-center justify-between py-5">
                    <button onClick={() => setOpenSimilar(prev => !prev)} className='flex items-center transition-all delay-150 space-x-2 justify-center bg-gray-200 px-3 py-2 rounded-full text-sm'>
                        <p>See similar </p>
                        {!openSimilar ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    <div className='flex items-center bg-gray-100 p-1 rounded-full text-base text-gray-500 overflow-hidden'>
                        <button onClick={() => setDeliveryMode(true)} className={`px-5 py-2 ${deliveryMode && 'bg-white rounded-full'}`}>
                            Delivery
                        </button>
                        <button onClick={() => setDeliveryMode(false)} className={`px-5 py-2 ${!deliveryMode && 'bg-white rounded-full'}`}>
                            Pickup
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {
            openSimilar &&
            similar.map((feedData, index) => <div key={`feed-list-${index}`} className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
                <div className='flex items-center justify-between '>
                    <h3 className='text-2xl font-medium'>{feedData.title}</h3>
                    <div className='hidden md:flex items-center space-x-8'>
                        <button>See all</button>
                        <div className='flex items-center space-x-3'>
                            <button className=" bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                                <HiArrowLeft size={18} />
                            </button>
                            <button className=" bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                                <HiArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                    <button className=" md:hidden bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                        <HiArrowRight size={18} />
                    </button>
                </div>

                <div className='flex flex-row items-center space-x-5 overflow-hidden overflow-x-auto'>

                    {feedData.stores.map((store, idx) => <div onClick={() => router.push('/store/' + idx)} key={`store-${index}-${idx}`} className='w-2/3 md:w-1/4 flex flex-col space-y-3 cursor-pointer shrink-0'>
                        <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                            <img alt={`${store.image}_banner`} className="flex-1 object-cover" src={store.banner} />

                            <button className='absolute top-4 right-4'>
                                <FaRegHeart size={20} color="white" />
                            </button>
                        </div>
                        <div className='flex flex-row items-start justify-between'>
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-medium'>{store.name}</h3>
                                <p className='font-light text-gray-600'> 20–40 min</p>
                            </div>
                            <div className='h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex text-xs'>
                                4.5
                            </div>
                        </div>
                    </div>
                    )}


                </div>

            </div>)
        }


        <div className='py-5 pb-10'>
            <div className="flex flex-col container mx-auto  space-y-5 pb-5 px-5 md:px-0">
                <div className='flex items-center justify-between '>
                    <div className='flex flex-col space-y-1'>
                        <h3 className='text-2xl font-medium'>From customers</h3>
                        <p className='text-sm font-light text-gray-700'>Reviews from people who've ordered here</p>
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        <button>See all</button>
                        <div className='flex items-center space-x-3'>
                            <button className=" bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                                <HiArrowLeft size={18} />
                            </button>
                            <button className=" bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                                <HiArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                    <button className=" md:hidden bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm">
                        <HiArrowRight size={18} />
                    </button>
                </div>

                <div className='flex flex-row items-center space-x-5 overflow-hidden overflow-x-auto'>
                    {comments.map((comment, index) => <div key={`comment-${index}`} className='w-2/3 md:w-1/4 flex flex-col h-32 space-y-3 cursor-pointer shrink-0 border  rounded-md p-5'>

                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex overflow-hidden">
                                <img className="flex-1 object-cover" alt='user_image' src={'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d590fac5df89924d.svg'} />
                            </div>
                            <div>
                                <h3>{comment.user}</h3>
                                <p className='text-xs font-light text-gray-500'>3 weeks ago</p>
                            </div>
                        </div>
                        <p className='text-base font-light truncate'>{comment.message}</p>
                    </div>)}
                </div>

            </div>
        </div>

        <div className='flex items-start md:space-x-3 container mx-auto'>
            <div className='hidden w-1/4 text-lg md:flex flex-col space-y-5 text-gray-500 sticky top-10'>
                <h3 className='cursor-pointer'>Featured Items</h3>
                <h3 className='cursor-pointer'>Breakfast</h3>
                <h3 className='cursor-pointer'>Extras</h3>
                <h3 className='cursor-pointer'>Salads</h3>
                <h3 className='cursor-pointer'>Kid's Meals</h3>
            </div>
            <div className='w-full md:w-3/4 flex-col space-y-16'>

                <div className='flex flex-col space-y-8 px-5 md:px-0'>

                    <h3 className='text-2xl'>Featured Items</h3>

                    <div className='flex items-center flex-row  gap-5 overflow-x-auto'>
                        <div onClick={() => setSelectedFood(1)} className='col-span-6 w-1/2 md:w-1/4'>

                            <div className='min-h-40 border rounded-lg  flex flex-col items-center overflow-hidden'>

                                <div className='h-40 flex bg-gray-100 w-40 relative overflow-hidden'>
                                    <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/85c9bdbd7500311ecf28d8c648c941e6/a19bb09692310dfd41e49a96c424b3a6.jpeg" />
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='bg-white p-2 rounded-full absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                </div>

                            </div>
                            <div className='py-2 flex flex-col space-y-1'>
                                <h3 className='text-[15px] fonty-medium'>Chick-fil-A Chick-n-Mini</h3>
                                <p className='text-sm font-light'>$13.85</p>
                            </div>
                        </div>

                        <div onClick={() => setSelectedFood(1)} className='col-span-6 w-1/2 md:w-1/4'>

                            <div className='min-h-40 border rounded-lg  flex flex-col items-center overflow-hidden'>

                                <div className='h-40 flex bg-gray-100 w-40 relative overflow-hidden'>
                                    <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/832c4dd1ff6d9232d9fcc97ac4468b0c/a19bb09692310dfd41e49a96c424b3a6.jpeg" />
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='bg-white p-2 rounded-full absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                </div>

                            </div>
                            <div className='py-2 flex flex-col space-y-1'>
                                <h3 className='text-[15px] fonty-medium'>Chick-fil-A Chick-n-Mini</h3>
                                <p className='text-sm font-light'>$13.85</p>
                            </div>
                        </div>

                        <div onClick={() => setSelectedFood(1)} className='col-span-6 w-1/2 md:w-1/4'>

                            <div className='min-h-40 border rounded-lg  flex flex-col items-center overflow-hidden'>

                                <div className='h-40 flex bg-gray-100 w-40 relative overflow-hidden'>
                                    <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/1091072bb299f23f63aa64884cbaade7/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='bg-white p-2 rounded-full absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                </div>

                            </div>
                            <div className='py-2 flex flex-col space-y-1'>
                                <h3 className='text-[15px] fonty-medium'>Chick-fil-A Chick-n-Mini</h3>
                                <p className='text-sm font-light'>$13.85</p>
                            </div>
                        </div>

                        <div onClick={() => setSelectedFood(1)} className='col-span-6 w-1/2 md:w-1/4'>

                            <div className='min-h-40 border rounded-lg  flex flex-col items-center overflow-hidden'>

                                <div className='h-40 flex bg-gray-100 w-40 relative overflow-hidden'>
                                    <img className='flex-1 object-cover' src="https://tb-static.uber.com/prod/image-proc/processed_images/79653b5f2987abe098e60af493c80381/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='bg-white p-2 rounded-full absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                </div>

                            </div>
                            <div className='py-2 flex flex-col space-y-1'>
                                <h3 className='text-[15px] fonty-medium'>Chick-fil-A Chick-n-Mini</h3>
                                <p className='text-sm font-light'>$13.85</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col space-y-8 px-5 md:px-0'>

                    <h3 className='text-2xl'>Breakfast</h3>

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
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
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
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
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
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='hidden bg-white p-2 rounded-full md:flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={30} />
                                    </button>
                                    <button onClick={(e) => {e.stopPropagation();setOpenAddToCart(true)}} className='md:hidden bg-white p-2 rounded-full flex absolute bottom-2 shadow-sm border-gray-100 right-2'>
                                        <IoAdd size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

       
        {openAddToCart && <AddToCart close={()=>setOpenAddToCart(false)} />}
        {selectedFood && <FoodInfo close={() => setSelectedFood(null)} />}


        <Footer />
    </div>
}