import { FaKey } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function WithEmail() {
  return (
    <div className="flex flex-1 flex-col gap-2 p-10">
      <p className="text-2xl text-center">Create new account</p>
      <div className="flex flex-col gap-5 items-center  flex-1">
        <img src="/temp.png" className="w-56 h-56 object-contain" />
        <form action="/login/territory" className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 w-full bg-gray-50 border p-2 rounded-md">
            <IoMdMail size={25} color="gray" />
            
            <input required type="email" name="" id="" placeholder="Email" className="p-2 outline-none bg-gray-50" />
          </div>
          <div className="flex items-center gap-2 w-full bg-gray-50 border p-2 rounded-md">
            <FaKey size={25} color="gray" />
            <input required type="password"  placeholder="Password" className="p-2 bg-gray-50 outline-none" />
          </div>
          <button type="submit" className="w-full p-3 mt-5 bg-blue-500 rounded-md text-white">Create Account</button>
        </form>
      </div>
    </div>
  );
}
