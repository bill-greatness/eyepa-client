import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import Footer from "../../components/Footer";
import { IoHappySharp, IoShare } from "react-icons/io5";
import { LuBike, LuChefHat } from "react-icons/lu";
import { FaHandSparkles, FaPhone } from "react-icons/fa6";
import { getDoc, getDocs } from "../../functions/call";
import { useRouter } from "next/router";

const order = {
  id: "Order A89834GW90",
  progress: 1,
  estimatedTime: "30 minutes",
  products: [
    {
      store: "Chick-fil-A",

      items: [
        {
          name: "Chick-fil-A Chick-n-Mini",
          price: "$50.58",
          store: "Chick-fil-A",
        },
        {
          name: "Chick-fil-A Chocholate Crush",
          price: "$18.58",
          store: "Chick-fil-A",
        },
      ],
    },
    {
      store: "Kenturkey Fried Chicken - Com 9.",

      items: [
        {
          name: "Chicken Bucket - XL",
          price: "$50.58",
          store: "Kenturkey Fried Chicken - Com 9",
        },
        {
          name: "KFC Fried Rice - XL",
          price: "$18.58",
          store: "Kenturkey Fried Chicken - Com 9",
        },
      ],
    },
  ],
  destination: "A Arhinful Ave, Sekondi - Takoradi , Ghana",
  rider: {
    name: "Kelvin Dashmate Rider",
    phone: "+233 54 654 7509",
    rating: 4.5,
  },
};

export default function OrderDetails() {
  const [order, setOrder] = useState(null);

  const router = useRouter()

  useEffect(() => {
    getDocs({
      path: `/order/${router.query.slug}`,
      getter: setOrder,
    });
  }, [router.query]);

  
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header
        title={"Order History"}
        description={"Find information about your order progress"}
      />
      {/* <SearchComponent /> */}

      {order !== null && (
        <div className="flex flex-col flex-1 container mx-auto space-y-5 py-10">
          <div className=" min-h-72 md:w-3/4 mx-auto">
            <div className="border-b py-5 flex flex-row items-center justify-between md:px-5">
              <p className="text-lg font-semibold">Order #{order.id}</p>
              <div>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <IoShare size={20} />
                </button>
              </div>
            </div>

            <p className="text-lg font-light text-gray-500 text-center pt-10">
              Order Progress
            </p>

            <div className="flex flex-row items-center justify-center py-10 space-x-5">
              <div className="flex flex-col space-y-1">
                <div className="h-14 w-14 rounded-full bg-yellow-100 text-yellow-500 cursor-pointer border flex items-center justify-center">
                  <LuChefHat size={30} />
                </div>
                <p className={`text-sm font-light text-center text-yellow-600`}>
                  Preparing
                </p>
              </div>
              <hr className="md:w-10" />
              <div className="flex flex-col space-y-1">
                <div className="h-14 w-14 rounded-full cursor-pointer border flex items-center justify-center">
                  <FaHandSparkles size={30} />
                </div>
                <p className="text-sm font-light text-center">Pickup</p>
              </div>
              <hr className="md:w-10" />
              <div className="flex flex-col space-y-1">
                <div className="h-14 w-14 rounded-full cursor-pointer border flex items-center justify-center">
                  <LuBike size={30} />
                </div>
                <p className="text-sm font-light text-center">Dispatch</p>
              </div>
              <hr className="md:w-10" />
              <div className="flex flex-col space-y-1">
                <div className="h-14 w-14 rounded-full cursor-pointer border flex items-center justify-center">
                  <IoHappySharp size={30} />
                </div>
                <p className="text-sm font-light text-center">Delivered</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-1 items-center justify-center">
              <h3 className="text-sm">Arriving In</h3>
              <h3 className="text-xl font-medium">{order.estimatedDeliveryTime}</h3>
            </div>
            <div className="md:w-2/5 md:border mx-auto min-h-10 p-5">
              <div className="flex flex-row items-center space-x-5">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="flex flex-col space-y-1">
                  {/* <p className="text-lg font-medium">{order.rider.name}</p> */}
                  <p className="text-lg font-medium">{order.riderStatus}</p>
                  <p className="text-sm font-light">Dispatch Rider</p>
                </div>
                <div className="flex flex-1"></div>
                <button className="bg-gray-200 p-3 rounded-full shrink-0">
                  <FaPhone size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 min-h-72 border-t md:w-3/4 mx-auto flex flex-col p-5 space-y-5">
            <h4 className="text-green-600 font-medium text-sm">
              Order Details
            </h4>
            {order.items?.map((product, index) => (
              <div className="flex flex-col space-y-5" key={`store-${index}`}>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="flex flex-col space-y-5 px-3">
                  {product.addons?.map((data, index) => (
                    <div key={`item-${index}`}>
                      <div>
                        <p className="text-gray-700 font-medium">{data.description}</p>
                        <p className="text-gray-500 font-light">{data.quantity}</p>
                        <p className="text-gray-500 font-light">{data.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col space-y-1">
              <h4 className="text-green-600 font-medium text-sm">
                Delivery Location
              </h4>
              <p className="text-lg mx-3">{order.deliveryTo?.fullAddress}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
