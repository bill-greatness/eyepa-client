import Link from "next/link";
import { BsClockFill, BsCart2, BsStarFill } from "react-icons/bs";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";
export const HorizontalCard = () => {
  return (
    <Link href={"/foods/details"}>
      <div
        className="relative -z-10 w-60 h-72 bg-red-600 rounded-2xl bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="button bg-gray-500/100 w-fit absolute top-2 left-2 rounded-sm  px-2 py-1 text-xs text-white">
          Breakfast
        </div>

        <div className="absolute bottom-0 h-20 w-full bg-white/80 p-2">
          <p className="font-bold leading-relaxed text-base">
            Flavourful Fried Rice Fiesta
          </p>
          <p className="text-xs">By Greatness Cooks</p>
          <div className="flex items-center gap-2 p-2">
            <BsClockFill size={15} color="black" />{" "}
            <p className="text-xs">15 mins</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ItemCard = () => {
  return (
    <div className="w-full flex h-fit bg-gray-100 border gap-2 rounded-md overflow-hidden">
      <img
        className="w-28 object-cover"
        src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?size=626&ext=jpg&ga=GA1.2.981665702.1686732955&semt=sph"
        alt="Food"
      />
      <div className="flex-1 flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <button className="text-xs bg-gray-200 p-2">Sweets</button>
          <button className="text-xs bg-gray-800 rounded-md p-2">
            <FaHeartCirclePlus size={20} color="orange" />
          </button>
        </div>
        <p className="text-md leading-relaxed font-medium">
          Tropical Paradise Fruit Salad
        </p>
        <div className="flex justify-between">
          <button className="text-md font-semibold">GH₵ 10.43</button>
          <Link href="/foods/details" className="p-2 bg-gray-300 rounded-md">
            <BsCart2 size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Food = ({ food, currency }) => {
  return (
    <Link
      href={`/foods/id/${food._id}`}
      className="w-full h-72 rounded-md shadow-md overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${food?.photo})`,
        }}
        className="w-full h-3/5 bg-blue-200 bg-cover relative"
      >
        <div className="w-fit rounded-full flex items-center absolute top-2 left-2 invert bg-white/100 gap-2 h-fit  py-1 px-2">
          <p className="text-md font-bold">
            {currency}
            {parseFloat(food?.price).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <p className="font-semibold text-lg leading-relaxed">{food?.name}</p>
        <div className="flex gap-2">
          <button className="p-2 text-sm flex gap-2 items-center">
            <GiCookingPot color="orange" size={20} /> 15 mins{" "}
          </button>
          <button className="p-2 text-sm">15 mins</button>
        </div>
        <div className="flex items-center gap-2">
          {food.tags?.map((tg) => (
            <button
              key={tg}
              className="w-fit text-xs uppercase px-2 py-1 font-semibold bg-gray-200 tracking-widest"
            >
              {tg}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
};
