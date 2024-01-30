import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import _ from "lodash";
import Footer from "../../components/Footer";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import SearchComponent from "../../components/SearchComponent";
import { getDocs } from "../../functions/call";
import AddToCart from "../../components/AddToCart";
import FoodInfo from "../../components/FoodInfo";

const foodCategories = [
  {
    name: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png",
  },
  {
    name: "Italian",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Italian.png",
  },
  {
    name: "American",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/American.png",
  },
  {
    name: "Halal",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Halal.png",
  },
  {
    name: "Chinese",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Chinese.png",
  },
  {
    name: "Sushi",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Sushi.png",
  },
  {
    name: "Healthy",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Healthy.png",
  },
  {
    name: "Mexican",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Mexican.png",
  },
  {
    name: "Indian",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Indian.png",
  },
  {
    name: "FastFood",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/FastFood.png",
  },
  {
    name: "Soup",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Soup.png",
  },
  {
    name: "Korean",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Korean.png",
  },
  {
    name: "Wings",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Wings.png",
  },
  {
    name: "Burgers",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Burgers.png",
  },
];

export default function Foods() {
  const router = useRouter();
  const [food, setFood] = useState(null);
  const [item, setItem] = useState(null);
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getDocs({
      path: "/food/all/United Kingdom",
      getter: setFoods,
    });
    getDocs({
      path: "/food/categories",
      getter: setCategories,
    });
    getDocs({
      path: "/store/all/United Kingdom",
      getter: setStores,
    });

    // ask user for their location.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((info) => {
        console.log(info);
      });
    }
  }, []);

  const filterFeeds = () => {
    if (category === "All") {
      return foods;
    }

    return foods.filter((fd) => fd.category === category);
  };

  const addItem = (item) => {
    setItem(item);
    setFood(null);
  };

  const foodsByCategory = () => {
    const grouped = _.groupBy(foods, (fd) => fd.category);
    const data = [];
    Object.entries(grouped).forEach(([category, value]) => {
      data.push({
        category,
        foods: value,
      });
    });
    return data;
  };

  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col">
      <Header />
      <SearchComponent />

      <div className="flex-1 flex flex-col space-y-10">
        <div className="container mx-auto flex items-center py-10 space-x-10 overflow-hidden overflow-x-auto relative">
          <button className="hidden md:flex bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm left-0 sticky">
            <HiArrowLeft size={18} />
          </button>
          {foodCategories.map((data, index) => (
            <button
              onClick={() => setCategory(data)}
              key={`food-category-${index}`}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-full border border-gray-100 overflow-hidden">
                <img className="flex-1" src={data.image} />
              </div>
              <p>{data.name}</p>
            </button>
          ))}
          <button className="hidden md:flex bg-gray-100 p-2 rounded-full bg-opacity-80 backdrop-blur-sm right-0 sticky">
            <HiArrowRight size={18} />
          </button>
        </div>
        <div className="flex flex-col md:p-10">
          {foodsByCategory().map((fdx, idx) => (
            <div className="" key={idx}>
              <div className="py-3">
                <h3 className="md:text-2xl text-lg">{fdx.category}</h3>
              </div>
              <div className="flex flex-row items-center space-x-5 overflow-hidden overflow-x-auto">
                {fdx.foods?.map((fd, idx) => (
                  <div
                    onClick={() => setFood(fd)}
                    key={idx}
                    className="w-2/3 md:w-1/4 flex flex-col space-y-3 p-2 cursor-pointer shrink-0"
                  >
                    <div className="w-full flex bg-gray-300 h-40 rounded-xl relative overflow-hidden">
                      <img
                        alt={`${fd?.photo}_banner`}
                        className="flex-1 object-cover"
                        src={fd?.photo}
                      />

                      <button className="absolute top-4 right-4">
                        <FaRegHeart size={20} color="white" />
                      </button>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div className="flex flex-col space-y-2">
                        <h3 className="font-medium">{fd?.name}</h3>
                        <div className="flex items-center gap-2">
                          {fd.tags?.slice(0, 2).map((tg) => (
                            <button
                              key={tg}
                              className="w-fit text-xs uppercase px-2 py-1 bg-gray-100 tracking-widest"
                            >
                              {tg}
                            </button>
                          ))}
                        </div>
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

        <div className="flex flex-col container mx-auto border-b space-y-5 pb-5 px-5 md:px-0">
          <div className="flex items-center justify-between ">
            <h3 className="text-2xl font-medium">All stores</h3>
          </div>

          <div className="flex flex-row items-center  overflow-hidden flex-wrap">
            {stores.map((store, index) => (
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

      {item && <AddToCart close={() => setItem(null)} item={item} />}
      {food && (
        <FoodInfo food={food} close={() => setFood(null)} setAdd={addItem} />
      )}

      <Footer />
    </div>
  );
}
