import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { TbClockCancel, TbClock } from "react-icons/tb";

export default function Restaurants() {
  return (
    <div className="flex-1">
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
      <p className="tracking-wide text-md font-semibold uppercase">Restaurants Near You</p>
        {[1, 2, 3, 4, 5].map((info, idx) => (
          <Restaurant />
        ))}
      </div>
    </div>
  );
}

const Restaurant = () => (
  <Link
    href={"/restaurants/info"}
    className="flex gap-2 items-center border rounded-md shadow-sm p-2"
  >
    <img
      src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg="
      className="w-16 h-16 object-cover rounded-md"
    />
    <div className="flex flex-col flex-1">
      <p className="text-lg font-semibold leading-relaxed">Greatness Cooks</p>
      <div className="flex w-full gap-3 mt-1">
        <div className="flex gap-1 items-center">
          <GoLocation /> <p className="text-sm">Some Location</p>
        </div>
        <div className="flex gap-1 items-center">
          <TbClock /> <p className="text-sm">12:00</p>
        </div>
        <div className="flex gap-1 items-center">
          <TbClockCancel color="red" /> <p className="text-sm">12:00PM</p>
        </div>
      </div>
    </div>
  </Link>
);
