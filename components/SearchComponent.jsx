import React, { useState } from "react";
import { HiLocationMarker, HiShoppingCart, HiX } from "react-icons/hi";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import CartModal from "./CartModal";
import ChangeLocationModal from "./ChangeLocationModal";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useRouter } from "next/router";

export default function SearchComponent() {
  const router = useRouter();
  const [showChartModal, setShowChartModal] = useState(false);
  const [showChangeLocationModal, setShowChangeLocationModal] = useState(false);
  const [location, setLocation] = useState({});

  const setAddress = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((cord) => {
        setLocation({
          coordinates: [cord.lat, cord.lng],
          fullAddress: address,
          country: address.split(",")[address.split(",").length - 1],
        });

        localStorage.setItem(
          "country",
          address.split(",")[address.split(",").length - 1]
        );
      })
      .catch((error) => console.error("Error", error));
  };

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="border-b pb-3 px-5 md:px-0">
      <div className="container mx-auto flex items-center flex-col md:flex-row md:space-x-10 ">
        <div className="flex items-center space-x-3 md:w-1/4 justify-between w-full">
          <div className="flex items-center space-x-3 flex-1">
            <div className="bg-gray-100 p-2 rounded-full">
              <HiLocationMarker size={20} color="gray" />
            </div>
            <div
              onClick={() => setShowChangeLocationModal(true)}
              className="cursor-pointer"
            >
              <p className="text-xs text-gray-400">Current Location</p>
              <p>{location?.fullAddress}</p>
            </div>
          </div>
          <div className="w-1/4 p-5 md:hidden">
            <button
              onClick={() => setShowChartModal(true)}
              className=" text-gray-400 p-3 rounded-md relative flex space-x-2"
            >
              <LuShoppingCart size={20} />
              <p>Cart</p>
              <div className="text-xs text-white bg-yellow-500 absolute -top-3 rounded-full border h-5 w-5 right-0">
                3
              </div>
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-5 w-full md:w-[50vw] rounded-md flex items-center space-x-5">
          <LuSearch size={18} color={"gray"} />
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                router.push(`/feeds/q/${searchTerm}`)
              }
            }}
            type="text"
            className="bg-transparent flex-1"
            placeholder="Search Food and Restaurants"
          />
        </div>
        <div className="w-1/4 p-5 hidden md:flex">
          <button
            onClick={() => setShowChartModal(true)}
            className="bg-black text-white p-3 rounded-md relative flex space-x-2"
          >
            <LuShoppingCart size={20} />
            <p>Cart</p>
            <div className="text-xs text-white bg-yellow-500 absolute -top-3 rounded-full border h-5 w-5 right-0">
              3
            </div>
          </button>
        </div>

        {showChangeLocationModal && (
          <ChangeLocationModal
            setAddress={setAddress}
            close={() => setShowChangeLocationModal(false)}
          />
        )}

        {showChartModal && <CartModal close={() => setShowChartModal(false)} />}
      </div>
    </div>
  );
}
