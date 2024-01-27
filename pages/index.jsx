import Head from "next/head";
import axios from "axios";
import { PROXY } from "./api";
import { useState, useEffect } from "react";
import { HorizontalCard, ItemCard } from "../components/Cards";

import { BsSearch } from "react-icons/bs";
import Link from "next/link";


export default function Home() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    async function getStores() {
      try {
        const { data } = await axios.get(`${PROXY}/store/all/United Kingdom`);
        setStores(data);
      } catch (err) {}
    }
    getStores();
  }, []);
  return (
    <div>
      <Head>
        <title>Eyepa Delivery Foods</title>
        <meta
          name="description"
          content="Find great foods from restaurants near you"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
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

            <Link href={"/foods"} className="text-md font-semibold">
              See More
            </Link>
          </div>
          {[1, 2, 3, 4, 5].map((info, idx) => (
            <ItemCard />
          ))}
        </div>


      </main>
    </div>
  );
}
