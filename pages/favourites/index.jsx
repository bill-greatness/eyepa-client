import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchComponent from "../../components/SearchComponent";
import { IoAdd } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiHeart } from "react-icons/hi2";
import { useRouter } from "next/router";
import AddToCart from "../../components/AddToCart";
import FoodInfo from "../../components/FoodInfo";
import { getWithHeaders } from "../../functions/call";
import { useAuthContext } from "../../context/Authentication";


export default function Favorites() {
  const [openAddToCart, setOpenAddToCart] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [user, setUser] = useState({});
  const { auth } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/auth");
    }
    getWithHeaders({
      path: `/user/${localStorage.getItem("userID")}`,
      getter: setUser,
    });
  }, [auth]);

  console.log(user?.favorites);

  const getGrouped = () => {
    const grouped = _.groupBy(user?.favorites || [], (us) => us.type);

    let typed = [];
    Object.entries(grouped).forEach(([key, value]) => {
      typed.push({
        type: key,
        data: value,
      });
    });

    return typed;
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header
        title={"Your Favorites | Eyepa Delivery Market"}
        description={
          "Foods and Restaurants tagged as favorites on Eyepa Delivery"
        }
      />
      <SearchComponent />
      <div className="flex-1 flex py-10">
        <div className="flex items-start md:space-x-3 container mx-auto">
          <div className="hidden w-1/4 text-lg md:flex flex-col space-y-5 text-gray-500 sticky top-10">
            {getGrouped().map((info, idx) => (
              <div className="flex items-center cursor-pointer justify-between pr-10" key={idx}>
                <h3 className="cursor-pointer capitalize">{info?.type}</h3>
                <p className="font-medium text-sm">({info.data?.length})</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-3/4 flex-col space-y-16">
            {getGrouped()?.map((info, idx) => (
              <div className="flex flex-col space-y-8 px-5 md:px-0" key={idx}>
                <h3 className="text-2xl">Favourite {info?.type}s</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
                  {info?.data.map((inf, idx) => (
                    <div
                      // onClick={() => router.push(info?.type === "food" ? "/store/" + idx)}
                      key={idx}
                      className="flex flex-col space-y-3 cursor-pointer shrink-0"
                    >
                      <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                        <img
                          alt={`${inf.photo}_banner`}
                          className="flex-1 object-cover"
                          src={inf?.photo}
                        />

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="absolute top-4 right-4 hover:bg-white/50 p-1 rounded-full transition-all"
                        >
                          <HiHeart size={20} color="red" />
                        </button>
                      </div>
                      <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-col space-y-1">
                          <h3 className="font-medium">{inf?.name}</h3>
                          <p className="font-light text-gray-600">
                            {" "}
                            {"X"}–{"Y"}
                            min
                          </p>
                        </div>
                        <div className="h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex text-xs">
                          4.5
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openAddToCart && <AddToCart close={() => setOpenAddToCart(false)} />}
      {selectedFood && <FoodInfo close={() => setSelectedFood(null)} />}

      <Footer />
    </div>
  );
}
