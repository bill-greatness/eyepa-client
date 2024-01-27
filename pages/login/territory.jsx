import { MdMyLocation, MdLocationPin, MdShareLocation } from "react-icons/md";
import { useRouter } from "next/router";
export default function SetTerritory() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-screen p-10">
      <form className="h-2/4 w-full flex flex-col gap-2">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="country" className="text-xs">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="p-3 outline-none bg-gray-50 border"
          >
            <option value="">--Select Country--</option>
            <option value="Ghana">Ghana</option>
            <option value="Ghana">United Kingdom</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="area" className="text-xs">
            Area
          </label>
          <div className="flex items-center px-2 bg-gray-50 border">
            <input
              type="text"
              id="area"
              className="w-full bg-gray-50 p-3 outline-none"
              placeholder="Search Location"
            />
            <MdMyLocation size={20} color="gray" />
          </div>
        </div>
        {/* Location Suggestions */}
      </form>
      <div className="h-1/4 w-full flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs">Your Area</p>
          <div className="w-full flex items-center gap-2 shadow-sm border p-3">
            <MdLocationPin size={20} color="gray" />{" "}
            <p className="text-sm truncate">Some Area Choose</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs">Current Location</p>
          <div className="w-full flex items-center gap-2 shadow-sm border p-3">
            <MdShareLocation size={20} color="gray" />{" "}
            <p className="text-sm truncate">Somewhere in North Carolina</p>
          </div>
        </div>

        <button
          onClick={() => router.push("/")}
          className="p-3 bg-blue-500 rounded-md mt-5 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
