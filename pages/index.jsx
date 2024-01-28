import Head from "next/head";
import {
  HiOutlineBellAlert,
  HiOutlineUser,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoFastFoodSharp } from "react-icons/io5";

import { HorizontalCard, ItemCard } from "../components/Cards";
import {
  FaHeartCircleCheck,
} from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import Notification from "../components/Notification";
export default function Home() {
  const [notesOpen, setNotesOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="container">
        {/* Topbar... */}
        <div className="flex items-center w-full sticky top-0 bg-gray-300 p-5">
          <Link href={"/"}>
            <p className="text-lg">Eyepa Delivery</p>
          </Link>
          <div className="flex-1 bg-white"></div>
        <button onClick={() => setNotesOpen(!notesOpen)}>
            <HiOutlineBellAlert size={30} color="black" />
          </button>
        </div>
        {/* Home Page... */}
        <div className="flex flex-col container">
          <div
            className="w-full m-1 flex flex-col justify-center p-3 h-40 rounded-md bg-gray-500 bg-blend-multiply mx-1 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=)",
            }}
          >
            <p className="text-2xl text-gray-100">New Recipe</p>
            <p className="text-sm text-white">
              Get 20% discount on purchase from...
            </p>
          </div>
          <div className="w-full p-2">
             <div className="flex items-center w-full bg-gray-100 rounded-lg border-gray-300 p-3">
            <BsSearch size={24} color="gray" />
            <input
              placeholder="Search food, restaurant, drink etc..."
              className="p-2 w-full bg-gray-100 outline-none"
            />
          </div>
          </div>
         
          {/* Good groups... */}
          <div className="flex w-screen overflow-x-auto">
            <div className="flex gap-2 justify-around p-2">
              {[1, 3, 4, 5, 6, 7, 8, 19].map((info, idx) => (
                <button
                  key={idx}
                  className="w-20 h-20 p-1 flex flex-col items-center gap-1"
                >
                  <img
                    src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705536000&semt=sph"
                    alt="Food Type"
                    className="rounded-full object-contain w-12 h-12"
                  />
                  <p className="text-xs leading-relaxed font-bold">Food Type</p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-screen overflow-x-auto py-10 px-5">
            <div className="flex justify-around gap-2 ">
              {[1, 2, 4, 5].map((info, idx) => (
                <HorizontalCard />
              ))}
            </div>
          </div>
        </div>
        {/* Popular Foods */}
        <div className="flex flex-col gap-2 pb-20 p-5">
          <div className="flex w-full justify-between">
          <p className="text-md font-bold">Popular Foods</p>

          <Link href={"/foods"} className="text-md font-semibold">See More</Link>

          </div>
          {[1, 2, 3, 4, 5].map((info, idx) => (
              <ItemCard />
          ))}
        </div>

        {/* Notification  */}
        {notesOpen && <Notification />}

        {/* Bottom Bar... */}
        <div className="fixed flex px-10 justify-between bg-gray-200 bottom-0 w-full p-3">
          <Link
            href={"/"}
            className="flex flex-col items-center justify-center"
          >
            <IoFastFoodSharp size={24} />
            <p className="text-xs">Home</p>
          </Link>
          <Link
            href={"/restaurants"}
            className="flex flex-col justify-center items-center"
          >
            <HiOutlineBuildingStorefront size={24} />
            <p className="text-xs">Restaurants</p>
          </Link>
          <Link
            href={"/some-where"}
            className="flex flex-col items-center justify-center"
          >
            <FaHeartCircleCheck size={24} />
            <p className="text-xs">Favorites</p>
          </Link>
          <Link
            href={"/account"}
            className="flex flex-col justify-center items-center"
          >
            <HiOutlineUser size={24} />
            <p className="text-xs">Account</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
