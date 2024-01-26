import React from 'react'
import Header from '../../components/Header'
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import Footer from '../../components/Footer'
import { HiLocationMarker } from 'react-icons/hi';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from 'next/router';
import { FaHeart } from "react-icons/fa6";
import SearchComponent from '../../components/SearchComponent';



const foodCategories = [

    {
        name: 'Pizza',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png'
    },
    {
        name: 'Italian',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Italian.png'
    },
    {
        name: 'American',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/American.png'
    },
    {
        name: 'Halal',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Halal.png'
    },
    {
        name: 'Chinese',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Chinese.png'
    },
    {
        name: 'Sushi',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Sushi.png'
    },
    {
        name: 'Healthy',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Healthy.png'
    },
    {
        name: 'Mexican',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png'
    },
    {
        name: 'Indian',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Indian.png'
    },
    {
        name: 'FastFood',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png'
    },
    {
        name: 'Soup',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Soup.png'
    },
    {
        name: 'Korean',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Korean.png'
    },
    {
        name: 'Wings',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png'
    },
    {
        name: 'Burgers',
        image: 'https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Burgers.png'
    },

]



const feed = [
    {
        title: 'Today’s offers',
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
    {
        title: 'Hot spots',
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
    {
        title: 'Most popular local restaurants',
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
    }
]


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


export default function Foods() {
    const router = useRouter()
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
<SearchComponent/>

            <div className="flex-1 flex flex-col space-y-10">

                <div className="container mx-auto flex items-center py-10 space-x-10 overflow-hidden overflow-x-auto relative">
                    <button className="absolute hidden md:flex bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm left-0 sticky">
                        <HiArrowLeft size={18} />
                    </button>
                    {
                        foodCategories.map((data, index) => <div key={`food-category-${index}`} className='flex flex-col items-center cursor-pointer'>
                            <div className='h-16 w-16 flex items-center justify-center rounded-full border border-gray-100 overflow-hidden'>
                                <img className='flex-1' src={data.image} />
                            </div>
                            <p>{data.name}</p>
                        </div>)
                    }
                    <button className="absolute hidden md:flex bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm right-0 sticky">
                        <HiArrowRight size={18} />
                    </button>

                </div>


                {

                    feed.map((feedData, index) => <div key={`feed-list-${index}`} className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
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

                            {feedData.stores.map((store, idx) => <div onClick={() => router.push('/store/'+idx)} key={`store-${index}-${idx}`} className='w-2/3 md:w-1/4 flex flex-col space-y-3 cursor-pointer shrink-0'>
                                <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                                    <img alt={`${store.image}_banner`} className="flex-1 object-cover" src={store.banner} />

                                    <button className='absolute top-4 right-4'>
                                        <FaRegHeart size={20} color="white" />
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

                    </div>)
                }


                <div className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
                    <div className='flex items-center justify-between '>
                        <h3 className='text-2xl font-medium'>All stores</h3>

                    </div>

                    <div className='flex flex-row items-center  overflow-hidden flex-wrap'>

                        {
                            stores.map((store, index) => <div onClick={() => router.push('/store/'+index)} key={`store-list-${index}`} className='w-full md:w-1/4 flex flex-col cursor-pointer space-y-3 px-1 pb-10'>
                                <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                                    <img className="flex-1 object-cover" src={store.banner} />

                                    <button className='absolute top-4 right-4'>
                                        <FaRegHeart size={20} color="white" />
                                    </button>
                                </div>
                                <div className='flex flex-row items-start justify-between'>
                                    <div className='flex flex-col space-y-1'>
                                        <h3 className='font-medium'>{store.name}</h3>
                                        <p className='font-light text-gray-600'> {store.estimatedTime[0]}–{store.estimatedTime[1]} min</p>
                                    </div>
                                    <div className='h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex text-xs'>
                                        {store.rating}
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <button className='bg-gray-200 px-5 py-3 text-sm font-medium rounded'>Show more</button>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
