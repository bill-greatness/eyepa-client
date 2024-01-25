import React from 'react'
import Header from '../../components/Header'
import { LuSearch } from "react-icons/lu";
import Footer from '../../components/Footer'

export default function Foods() {
    return (
        <div>
            <Header />
            <div className="border-b pb-3">
                <div className="container mx-auto flex items-center">
                    <div></div>
                    <div className="bg-gray-100 p-5 w-[50vw] rounded-md flex items-center spac">
                            <LuSearch size={18} color={"gray"} />
                            <input type="text" className="bg-transparent flex-1" placeholder="Search Food and Restaurants" />
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
