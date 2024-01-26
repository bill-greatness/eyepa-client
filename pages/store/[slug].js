import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '../../components/Header'
import SearchComponent from '../../components/SearchComponent'
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

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
        user:"Ella K.",
        date:"2 years ago",
        message:"Amazing"
    },
    {
        user:"fahreta M.",
        date:"2 years ago",
        message:"Always Delicious"
    },
    {
        user:"Shafali P.",
        date:"2 years ago",
        message:"good"
    },
    {
        user:"Shikira F.",
        date:"2 years ago",
        message:"Food was amazing"
    },
    {
        user:"Damaris M.",
        date:"2 years ago",
        message:"Good food"
    },
    {
        user:"Yves N.",
        date:"2 years ago",
        message:"Food was delivered on time right temperature and was not missing anything extra requestd...."
    },
]


export default function Page() {
    const router = useRouter()

    const [openSimilar, setOpenSimilar] = useState(false)
    const [deliveryMode, setDeliveryMode] = useState(true)

    return <div className="w-screen min-h-screen">
        <Header />
        <SearchComponent />

        <div className="h-60 bg-gray-500 flex relative overflow-hidden">

            <img className="flex-1 object-cover" src={banner} />

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
            <div className='py-10 flex flex-col space-y-2'>
                <h1 className='text-3xl font-medium text-gray-700'>Strictly Angwamo Oil Rice</h1>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center font-medium text-sm'>
                        <p>4.8</p> <MdStar />
                    </div>
                    <p className="text-sm text-gray-400 font-light">{"(10+)"}</p>
                    <p className='font-light text-gray-600'> 20–40 min</p>
                </div>
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
                                <h3 className='font-medium'>Naya Brookfield Place</h3>
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


        <div>
            <div className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
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
                {comments.map((comment,index) => <div key={`comment-${index}`} className='w-2/3 md:w-1/4 flex flex-col space-y-3 cursor-pointer shrink-0 border  rounded-md p-5'>

                    <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex overflow-hidden">
                            <img className="flex-1 object-cover" alt='user_image' src={'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d590fac5df89924d.svg'} />
                        </div>
                        <div>
                            <h3>{comment.user}</h3>
                            <p className='text-xs font-light text-gray-500'>3 weeks ago</p>
                        </div>
                    </div>
                    <p className='text-lg font-light'>{comment.message}</p>
                </div>)}
                </div>

            </div>
        </div>

        <p>Post: {router.query.slug}</p>
    </div>
}