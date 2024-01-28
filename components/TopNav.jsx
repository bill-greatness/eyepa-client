import { useState } from "react";
import Notification from "./Notification";
import { HiOutlineBellAlert } from "react-icons/hi2";
import Link from "next/link";
export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center w-full sticky top-0 bg-gray-300 p-5">
        <Link href={"/"}>
          <p className="text-lg">Eyepa Delivery</p>
        </Link>
        <div className="flex-1 bg-white"></div>
        <button onClick={() => setOpen(!open)}>
          <HiOutlineBellAlert size={30} color="black" />
        </button>

        {/* Notification  */}
      </div>
      {open && <Notification close={setOpen}/>}
    </>
  );
}
