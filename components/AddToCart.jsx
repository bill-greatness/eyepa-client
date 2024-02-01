import _ from "lodash";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi2";
import { Spin } from "./Feedback";
import { updateDoc } from "../functions/call";

export default function AddToCart({ close, item }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [addons, setAddons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(item?.price);

  useEffect(() => {
    const price = _.sumBy(addons, (ad) => parseFloat(ad.price));
    setTotalPrice(price);
  }, [addons]);

  const addAddon = (info, opp) => {
    // find if addon is already added.
    const exists = _.find(addons, (ad) => ad.description === info.description);

    // if this does exist... and opp is positive.
    if (exists === undefined && opp === "+") {
      setAddons((prev) => [
        ...prev,
        {
          description: info.description,
          quantity: 1,
          price: parseFloat(info.price),
        },
      ]);

      return;
    }

    if (exists === undefined && opp === "-") {
      return;
    }

    if (exists !== undefined) {
      let quantity = exists.quantity;
      if (opp === "+") {
        quantity += 1;
      }

      if (opp === "-") {
        if (quantity >= 1) {
          quantity -= 1;
        }
      }

      let temp = addons;

      temp[temp.indexOf(exists)] = {
        description: info.description,
        quantity,
        price: parseFloat(info.price) * quantity,
      };

      setAddons(temp);

      return;
    }
  };

  const findItem = (desc) => {
    return _.find(addons, (adn) => adn.description === desc);
  };

  const addToCart = async () => {
    setLoading(true);
    const orderDetails = {
      userID: localStorage.getItem("userID"),
      storeID: item?.storeID,
      country: item?.country,
      quantity,
      orderType: "Delivery",
      items: [
        {
          ...item,
          addons,
        },
      ],
    };

    const { status } = await updateDoc({
      path: "/user/favs/add?type=cart",
      data: orderDetails,
    });

    if (status === 200) {
      alert("Successfully Added to cart");
      // continue be closing modal
      close()
    }

    setLoading(false)

    // console.log(orderDetails);
  };
  const count = findItem;

  return (
    <div
      onClick={close}
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 flex md:items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="md:w-4/6 bg-white md:h-3/4 flex flex-col md:flex-row rounded"
      >
        <div className="md:w-1/2  flex-col space-y-2 hidden md:flex  p-10">
          <h3 className="font-bold text-3xl">{item?.name}</h3>
          <p className="text-sm font-medium">${item?.price}</p>

          <div className="pt-5 flex flex-1 overflow-hidden">
            <div className="flex-1 pt-10 flex overflow-hidden rounded-md">
              <img className="flex-1 object-cover" src={item?.photo} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-10  border-l flex flex-col space-y-5 overflow-hidden overflow-y-auto">
          <div className="flex flex-col space-y-5">
            <button
              onClick={() => close()}
              className="bg-gray-100 p-2 w-fit rounded-full md:hidden top-0 sticky"
            >
              <HiX size={20} />
            </button>
            <div className="h-60 w-full flex overflow-hidden md:hidden">
              <img className="flex-1 object-cover" src={item?.photo} />
            </div>
            <h3 className="font-bold text-3xl md:hidden">{item?.name}</h3>
            <p className="text-sm font-medium md:hidden">${item?.price}</p>
            <p className="text-sm font-light leading-relaxed">
              {item?.description}
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-3 border-b-2 pb-5">
              <h3 className="font-bold text-xl text-gray-600">Spice it up</h3>
              <p className="font-light text-sm text-gray-500">
                Choose as many addons as you like to spice your eating.
              </p>
            </div>
            <div className="flex flex-col flex-1 space-y-3">
              {item?.addons?.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between pt-5 border-b pb-5 border-gray-100"
                >
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{info?.description}</p>
                    <p className="text-sm font-light">
                      $
                      {(count(info?.description)?.price &&
                        parseFloat(count(info?.description)?.price).toFixed(
                          2
                        )) ||
                        info?.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => addAddon(info, "-")}
                      className="hover:bg-gray-100 p-2 hover:rounded-full"
                    >
                      <HiMinusCircle size={18} />
                    </button>
                    <p className="text-sm font-light">
                      {count(info.description)?.quantity || 0}
                    </p>
                    <button
                      onClick={() => addAddon(info, "+")}
                      className="hover:bg-gray-100 p-2 hover:rounded-full"
                    >
                      <HiPlusCircle size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="bg-gray-100 rounded-full px-2 py-1"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={addToCart}
                className="bg-black text-white font-medium flex-1 p-4 rounded-md"
              >
                {(loading && <Spin />) ||
                  `Add ${quantity} to cart (${parseFloat(totalPrice + item?.price).toFixed(2)})`}
              </button>
              <button
                onClick={close}
                className="bg-red-500 text-white font-medium p-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
