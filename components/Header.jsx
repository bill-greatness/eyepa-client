import React, { useState } from "react";
import Image from "next/image";
import {
  IoLogoAndroid,
  IoLogoAppleAppstore,
  IoTriangleSharp,
} from "react-icons/io5";
import { FaAndroid, FaBars } from "react-icons/fa6";
import { useRouter } from "next/router";
import { HiUserCircle, HiX } from "react-icons/hi";
import Head from "next/head";
import Script from "next/script";

export default function Header({ title, description }) {
  const router = useRouter();

  const [showMenue, setShowMenue] = useState(false);

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <header className="py-3 sticky top-0 z-50 bg-white">
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-a5Toku6TZnzEUwSSWHHkvGSkpMvwrMo&libraries=places&loading=async"></Script>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta content={description} name="description" />
      </Head>
      <div className="flex items-center justify-between container mx-auto px-5 md:px-0">
        <div className="cursor-pointer" onClick={() => router.push("/landing")}>
          <Image
            className="rounded-xl"
            src="/assets/logo.png"
            width={80}
            height={100}
            alt="logo"
          />
          {/* <h3 className="font-bold text-gray-600 text-xl">Eyepa Meal.</h3> */}
        </div>
        <div className="flex items-center space-x-10 text-gray-500">
          <button className="items-center space-x-3 hidden md:flex">
            <div className="flex items-center space-x-2">
              <img
                alt="flag_image"
                className="h-4"
                src="https://hatscripts.github.io/circle-flags/flags/gh.svg"
              />
              <p className="text-gray-500">Ghana</p>
            </div>
            <IoTriangleSharp size={10} color="gray" className="rotate-180" />
          </button>
          <button className="hidden md:flex">
            <p className="font-medium text-gray-700">Support</p>
          </button>
          {/* show when not authenticated */}
          <button
            onClick={() => router.push("/auth")}
            className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hidden md:flex"
          >
            <p>Sign up</p>
          </button>
          {/* show when authenticated */}
          <button
            onMouseOver={() => setShowInfoModal(true)}
            className="hidden md:flex"
            onClick={() => setShowMenue(true)}
          >
            <HiUserCircle size={40} />
          </button>
          <button onClick={() => setShowMenue(true)}>
            <FaBars size={20} color="black" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between container mx-auto"></div>

      {showInfoModal && (
        <div className="absolute md:flex top-0 -left-10 right-0 bottom-0 z-10 bg-black/20 hidden">
          <div
            onClick={() => setShowInfoModal(false)}
            className="flex-1 relative container mx-auto"
          >
            <div className="bg-white min-w-48 min-h-32 p-10 rounded-md absolute top-20 right-0">
              <div className="flex flex-col items-center space-y-3 cursor-pointer">
                <HiUserCircle size={60} />
                <div>
                  <p className="font-medium text-lg text-center">
                    James Bieber Hatsso
                  </p>
                  <p className="font-light text-xs hover:text-green-500 text-center">
                    Customer Account
                  </p>
                </div>
                <button
                  onClick={() => router.push("/auth")}
                  className="w-full text-red-500 font-semibold rounded-md"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMenue && (
        <div className="absolute flex top-0 -left-10 right-0 bottom-0 z-10 bg-black/20">
          <div onClick={() => setShowMenue(false)} className="flex-1 relative">
            {/* cart modal */}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="shadow-sm absolute flex flex-col md:w-1/4 h-screen bg-white border border-gray-100 rounded-md right-0 z-10 p-5"
            >
              <button
                onClick={() => setShowMenue(false)}
                className="bg-gray-200 p-2 m-3 rounded-full top-0 sticky flex md:hidden w-fit"
              >
                <HiX size={20} />
              </button>
              <div className="flex flex-col space-y-10 p-3">
                {/* show when logged in */}
                <div className="flex flex-col space-y-4 text-gray-700 text-sm font-medium">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <HiUserCircle size={60} />
                    <div>
                      <p className="font-medium text-lg">Account Holder</p>
                      <p className="font-light text-xs hover:text-green-500">
                        Customer Account
                      </p>
                    </div>
                  </div>
                  <p
                    onClick={() => router.push("/favourites")}
                    className="cursor-pointer"
                  >
                    Favorites
                  </p>
                  <p
                    onClick={() => router.push("/orders")}
                    className="cursor-pointer"
                  >
                    My Orders
                  </p>
                  <p
                    onClick={() => router.push("/support")}
                    className="cursor-pointer"
                  >
                    Support & Help
                  </p>
                  <div className="py-5">
                    <button
                      onClick={() => router.push("/auth")}
                      className="w-full bg-red-500 py-4 font-semibold text-white rounded-md"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
                {/* hide when authenticated and show when not  */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => router.push("/auth")}
                    className="w-full bg-black py-4 font-semibold text-white rounded-md"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => router.push("/auth")}
                    className="w-full bg-gray-200 py-4 font-semibold text-black rounded-md"
                  >
                    Log in
                  </button>
                </div>
                {/* hide when authenticated and show when not  */}
                <div className="flex flex-col space-y-4 text-gray-700 text-sm font-medium">
                  <p className="cursor-pointer">Create a business account</p>
                  <p className="cursor-pointer">Add your restaurant</p>
                  <p className="cursor-pointer">Sign up to deliver</p>
                </div>
              </div>
              <div className="flex flex-1"></div>
              <div className="flex flex-col space-y-8 px-5">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 flex p-2 shrink-0 rounded-lg bg-gray-800">
                    <img className="flex-1" src="/assets/logo.png" alt="logo" />
                  </div>
                  <p className="font-medium text-gray-600">
                    There's more to love in the app.
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <button className="flex items-center space-x-3 text-sm bg-gray-200 py-3 px-4 rounded-full">
                    <IoLogoAndroid size={20} />
                    <p>Android</p>
                  </button>
                  <button className="flex items-center space-x-3 text-sm bg-gray-200 py-3 px-4 rounded-full">
                    <IoLogoAppleAppstore size={20} />
                    <p>Apple</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
