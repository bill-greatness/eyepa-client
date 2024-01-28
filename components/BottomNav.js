import { IoFastFoodSharp } from "react-icons/io5";
import { HiOutlineUser, HiOutlineBuildingStorefront } from "react-icons/hi2";

import { FaHeartCircleCheck } from "react-icons/fa6";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="fixed flex md:hidden px-10 justify-between bg-gray-200 bottom-0 w-full p-3">
      <Link href={"/"} className="flex flex-col items-center justify-center">
        <IoFastFoodSharp size={24} />
        <p className="text-xs">Home</p>
      </Link>
      <Link
        href={"/restaurants"}
        className="flex flex-col justify-center items-center"
      >
        <HiOutlineBuildingStorefront size={24} />
        <p className="text-xs">Restaurants</p>
      </Link>
      <Link
        href={"/login"}
        className="flex flex-col items-center justify-center"
      >
        <FaHeartCircleCheck size={24} />
        <p className="text-xs">Favorites</p>
      </Link>
      <Link
        href={"/account"}
        className="flex flex-col justify-center items-center"
      >
        <HiOutlineUser size={24} />
        <p className="text-xs">Account</p>
      </Link>
    </div>
  );
}
