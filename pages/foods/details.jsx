import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { FaHeartCirclePlus } from "react-icons/fa6";

export default function FoodDetails() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="w-full sticky top-0  bg-blue-50 flex items-center justify-between p-5">
        <div className="flex flex-col">
          <p>Details</p>
          <p className="text-lg font-semibold">Name of Food</p>
        </div>
        <div className="flex flex-col">
          <p>Price</p>
          <p className="font-semibold">120 cedis</p>
        </div>
      </div>

      <div className="flex-1 rounded-t-3xl p-5">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="w-full h-40 bg-green-500 rounded-md object-cover"
        />
        <div className="p-2">
          <p className="font-semibold">About this food</p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolores nisi deleniti ipsam natus magnam quo voluptatum similique
            praesentium quisquam!
          </p>
        </div>
        <div className="flex gap-3 p-5 items-center mt-2">
          <p className="text-md font-bold">Size</p>
          <button className="p-2 w-1/3 rounded-full text-sm border border-yellow-300">
            Small
          </button>
          <button className="p-2 w-1/3 rounded-full text-sm border border-yellow-300">
            Medium
          </button>
          <button className="p-2 w-1/3 rounded-full text-sm border border-yellow-300">
            Big
          </button>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold">Choice of Addon</p>
          <table className="table-auto w-full">
            <tbody>
              {[1, 3, 3, 4, 5, 6].map((info, idx) => (
                <tr className="border-b text-sm" key={idx}>
                  <td className="p-2 font-semibold">Name of Addon</td>
                  <td className="p-2 font-bold">12GHS</td>
                  <td>
                    <button className="p-2" onClick={() => setShow(!show)}>
                      <FaHeartCirclePlus size={20} color="gray"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 40 }}
            exit={{ y: 100 }}
            className="w-full h-60 bg-gray-200 fixed bottom-0"
          >
            <div className="p-5">
              <p>Add</p>
              <p className="text-md font-semibold leading-relaxed">
                Name of Addon to your Order
              </p>
              <div className="flex items-center mt-3">
                <button className="p-2 w-1/5 bg-red-500">
                  <IoIosRemoveCircle size={25} color="white" />
                </button>
                <button className="p-2 flex-1 text-3xl bg-yellow-500">0</button>
                <button className="p-2 w-1/5 bg-blue-500">
                  <IoMdAddCircle size={25} color="white" />
                </button>
              </div>
              <button
                onClick={() => setShow(false)}
                className="p-2 w-full bg-white mt-3 rounded-md"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-5">
        <button className="p-2 bg-blue-300 font-semibold rounded-md">
          Proceed to Checkout (GHS 10.34)
        </button>
      </div>
    </div>
  );
}
