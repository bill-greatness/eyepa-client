import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GoLocation } from "react-icons/go";
import { PROXY } from "../api";

export default function Restaurants() {
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
    <div className="flex-1">
      <Head>
        <title>Restaurants - Eyepa Delivery</title>
        <meta
          name="description"
          content="Your favorite restuarant for type of dishes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=)",
        }}
        className="w-full bg-cover bg-blend-multiply p-6 justify-center flex flex-col h-52 bg-gray-500/80"
      >
        <p className="text-md text-gray-50">Restaurants</p>
        <p className="text-xl text-white">
          Get foods from your favorite restaurants
        </p>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <p className="tracking-wide text-md font-semibold uppercase">
          Restaurants Near You
        </p>
        {stores?.map((store, idx) => (
          <Restaurant key={idx} store={store} />
        ))}
      </div>
    </div>
  );
}

const Restaurant = ({ store }) => (
  <Link
    href={`/restaurants/store/${store._id}`}
    className="flex gap-2 items-center border rounded-md shadow-sm p-2"
  >
    <img
      src={store?.photo}
      className="w-16 h-16 shrink-0 object-cover rounded-md"
    />
    <div className="flex flex-col flex-1">
      <p className="text-lg font-semibold leading-relaxed">{store?.name}</p>
      <div className="flex w-full gap-3 mt-1">
        <div className="flex gap-1 items-center truncate">
          <GoLocation /> <p className="text-sm">{store?.fullAddress}</p>
        </div>
      </div>
    </div>
  </Link>
);
