import { GoLocation } from "react-icons/go";
import { Food } from "../../../components/Cards";
import { useEffect, useState } from "react";

import axios from "axios";
import { PROXY } from "../../api";
import { useRouter } from "next/router";
export default function Info() {
  const router = useRouter();
  const [store, setStore] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [foods, setFoods] = useState([]);

  // console.log(router.query);

  useEffect(() => {
    async function getStore() {
      try {
        const { data } = await axios.get(
          `${PROXY}/store/${router.query.store_id}`
        );
        setStore(data);
        const res = await axios.get(
          `${PROXY}/food/categories/${router.query.store_id}`
        );
        setCategories(res?.data);

        const res2 = await axios.get(
          `${PROXY}/food/store/${router.query.store_id}`
        );
        setFoods(res2?.data);
      } catch (err) {}
    }
    getStore();
  }, [router.query]);

  const filterFoods = () => {
    if (category === "All") {
      return foods;
    }

    return foods.filter((fd) => fd.category === category);
  };

  return (
    <div className="flex-1">
      <div
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=)",
        }}
        className=" flex bg-cover sticky top-0 z-50 bg-blend-multiply gap-3 items-center flex-col justify-center w-full h-56 bg-gray-500"
      >
        <p className="text-2xl font-bold text-white">{store?.name}</p>
        <div className="w-full max-h-16 overflow-hidden">
          <p className="text-center text-sm leading-relaxed text-gray-50">
            {store?.description}
          </p>
        </div>
        <div className="w-fit rounded-md mx-5 flex p-2 bg-white mt-4 justify-around gap-2">
          <div className="flex items-center gap-2">
            <GoLocation size={20} />{" "}
            <p className="text-sm">{store?.fullAddress}</p>
          </div>
        </div>
      </div>
      <div className="w-screen overflow-x-auto">
        <div className="flex gap-2 p-5">
          <button
            onClick={() => setCategory("All")}
            className="w-28 px-2 py-1 bg-gray-400 rounded-sm text-white whitespace-nowrap"
          >
            All Foods
          </button>

          {categories.map((info) => (
            <button
              onClick={() => setCategory(info.name)}
              key={info._id}
              className="w-28 px-2 py-1 bg-gray-400 text-white whitespace-nowrap"
            >
              {info?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-col p-5">
        {filterFoods().map((food, idx) => (
          <Food key={idx} food={food} currency={store?.currencySymbol} />
        ))}
      </div>
    </div>
  );
}
