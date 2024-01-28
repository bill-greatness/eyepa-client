import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import { BsDot } from "react-icons/bs";
export default function Account() {
    const [show, setShow] = useState(false)
  return (
    <div className="flex-1">
      <Head>
        <title>Your Profile- Eyepa Delivery</title>
        <meta
          name="description"
          content="Your profile on Eyepa Delivery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-yellow-500 sticky top-0 h-56 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-red-500 rounded-md"></div>
        <p className="text-2xl font-bold leading-relaxed">Bill Greatness</p>
        <p className="text-sm">billgreatness@outlook.com</p>
        <div className="flex gap-2 items-center">
          <p className="text-sm flex items-center">
            5 Diamonds <BsDot color="gray" size={30} />{" "}
          </p>
          <p className="text-sm flex items-center">
            4 Referals <BsDot color="gray" size={30} />{" "}
          </p>
          <p className="text-sm flex items-center">Referal Link </p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <p className="font-bold text-lg tracking-wide uppercase py-2">
          Order History
        </p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((info, idx) => (
              <tr
                className={`font-normal text-sm border-b ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
                key={idx}
                onClick={() => setShow(!show)}
              >
                <td className="p-3">#2323234</td>
                <td className="p-3 border">$45.40</td>
                <td className="p-3 border-r">Completed</td>
                <td className="p-3">10.10.2023</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AnimatePresence>
        {show && <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="h-4/5 w-screen rounded-t-3xl border-t-2 border-t-black bg-white shadow-lg fixed bottom-0 overflow-y-auto"
        >
          <div className="flex w-full items-center gap-2 p-5 border-b">
            <div className="w-20 h-20 rounded-md bg-gray-500 border-t-2"></div>
            <div className="flex flex-col">
              <p>Name of Item (Qty)</p>
              <p className="text-sm text-gray-500">Order ID: #2323234</p>
              <p className="text-sm text-gray-500">Date: 10.20.2034</p>
            </div>
          </div>
          <div className="container p-5">
            <p className="text-lg uppercase tracking-wide">Addons</p>
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left uppercase border-y bg-gray-50/30">
                  <th className="p-2">Items</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">QTY</th>
                </tr>
              </thead>
              <tbody>
                {[1, 3, 4, 2].map((info) => (
                  <tr className={`border-b ${info % 2 === 0 ? 'bg-white':'bg-gray-50'}`} key={info}>
                    <td className="p-2">Chocolate Cookies</td>
                    <td className="p-2">$0.48</td>
                    <td className="p-2">5</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setShow(!show)} className="p-2 bg-red-500 text-white mt-3 w-full rounded-md text-lg">Close</button>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
