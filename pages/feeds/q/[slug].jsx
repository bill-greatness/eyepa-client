import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import SearchComponent from '../../../components/SearchComponent'
import { useRouter } from 'next/router';
import { FaRegHeart } from 'react-icons/fa6';


const similar = 
    {
        title: "Similar offers",
        stores: [
            {
                name: "Strictly Angwamo Oil Rice",
                estimatedTime: [20, 40],
                rating: 4.5,
                photo:
                    "https://images.bolt.eu/store/2022/2022-05-26/f0470c17-449f-4ed2-9461-b554135380ab.jpeg",
            },
            {
                name: "Licking Waakye",
                estimatedTime: [20, 40],
                rating: 4.5,
                photo:
                    "https://images.bolt.eu/store/2023/2023-10-21/a8620a49-6364-458e-8cb2-73c487a4b45f.jpeg",
            },
            {
                name: "Kenkey Boutique",
                estimatedTime: [20, 40],
                rating: 4.5,
                photo:
                    "https://images.bolt.eu/store/2021/2021-11-25/d91b649e-616a-42c0-a5c4-db67433e7004.jpeg",
            },
            {
                name: "Sushi Koyoto",
                estimatedTime: [20, 40],
                rating: 4.5,
                photo:
                    "https://images.bolt.eu/store/2023/2023-05-25/68f3e944-6b6b-4be5-b39f-3704ba7825e7.jpeg",
            },
            {
                name: "Dunkins",
                estimatedTime: [20, 40],
                rating: 4.5,
                photo:
                    "https://images.bolt.eu/store/2020/2020-12-09/3f0a90f7-fa5c-4d1e-8e01-f1de04003c24.jpeg",
            },
        ],
    };


export default function SearchResultPage() {
    const router = useRouter();

    console.log(router.query.slug)
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden overflow-y-auto">
            <Header />
            <SearchComponent />
            <div className="flex-1 flex flex-col py-10">
                <div className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
                    <div className="flex items-center justify-between ">
                        <h3 className="text-xl font-medium">20 Search result</h3>
                    </div>

                    <div className="flex flex-row items-center  overflow-hidden flex-wrap">
                        {similar.stores?.map((store, index) => (
                            <div
                                onClick={() => router.push("/store/" + store?._id)}
                                key={`store-list-${index}`}
                                className="w-full md:w-1/4 flex flex-col cursor-pointer space-y-3 px-1 pb-10"
                            >
                                <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                                    <img className="flex-1 object-cover" src={store?.photo} />

                                    <button className="absolute top-4 right-4">
                                        <FaRegHeart size={20} color="white" />
                                    </button>
                                </div>
                                <div className="flex flex-row items-start justify-between">
                                    <div className="flex flex-col space-y-1">
                                        <h3 className="font-medium">{store?.name}</h3>
                                        <p className="font-light text-gray-600">
                                            {store?.fullAddress}
                                        </p>
                                    </div>
                                    <div className="h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex text-xs">
                                        {store.rating}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <button className="bg-gray-200 px-5 py-3 text-sm font-medium rounded">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
