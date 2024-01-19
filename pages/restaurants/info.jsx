import { GoLocation } from "react-icons/go";
import { TbClockCancel, TbClock } from "react-icons/tb";
import { Food } from "../../components/Cards";

export default function Info() {
  return (
    <div className="flex-1">
      <div
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=)",
        }}
        className=" flex bg-cover sticky top-0 z-50 bg-blend-multiply gap-3 items-center flex-col justify-center w-full h-56 bg-gray-500"
      >
        <p className="text-2xl font-bold text-white">Greatness Cooks</p>
        <p className="text-center text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, saepe?
        </p>
        <div className="w-full mx-5 flex p-2 bg-white mt-4 justify-around gap-2">
          <div className="flex items-center gap-2">
            <GoLocation size={20} /> <p className="text-sm">Some Location</p>
          </div>
          <div className="flex items-center gap-2">
            <TbClock size={20} /> <p className="text-sm">10:40AM</p>
          </div>
          <div className="flex items-center gap-2">
            <TbClockCancel size={20} /> <p className="text-sm">12:40PM</p>
          </div>
        </div>
      </div>
      <div className="w-screen overflow-x-auto">
        <div className="flex gap-2 p-5">
          <button className="w-28 px-2 py-1 bg-gray-400 rounded-sm text-white whitespace-nowrap">
            All Foods
          </button>
          <button className="w-28 px-2 py-1 bg-gray-400 text-white whitespace-nowrap">
            All Foods
          </button>
        </div>
      </div>
      <div className="flex gap-2 flex-col p-5">
        {[1, 2, 4, 5, 6, 7, 8].map((info, idx) => (
            <Food key={idx}/>

        ))}

      </div>

    </div>
  );
}
