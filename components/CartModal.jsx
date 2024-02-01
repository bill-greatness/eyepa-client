import React, { useEffect, useState } from "react";
import { HiLocationMarker, HiShoppingCart, HiX } from "react-icons/hi";
import { useCartContext } from "../context/Cart";
import getStripe from "../pages/utils/get-stripe";
import { getDocs, getDoc, sendDoc } from "../functions/call";

export default function CartModal({ close, info, location }) {
  // const { cart } = useCartContext()

  const [serviceCharge, setServiceCharge] = useState({});

  const [show, setShow] = useState(false);
  const [charges, setCharges] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDocs({
      path: `/user/service-charge/Ghana`,
      getter: setServiceCharge,
    });
  }, [location]);

  /*Pen's onChange... 
  onChange={(e) => {
    const newQuantity = parseInt(e.target.value);
    setCart((prev) => {
      return prev.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            quantity: newQuantity,
            price:
              parseFloat(product.price) * newQuantity,
          };
        }
        return item;
      });
    });
  }}*/

  const getDeliveryCharge = async (storeID) => {
    try {
      const { data } = await getDoc({
        path: `/order/get-delivery-charge/${storeID}/${location.coordinates[0]}/${location.coordinates[1]}`,
      });
      setShow(true);
      console.log(data);
      setCharges(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (cartx) => {
    // e.preventDefault();
    setIsLoading(true);
    // format to suite.
    let cart = [];
    for (var c of cartx.items) {
      cart.push({
        name: c.name,
        quantity: cartx.quantity,
        price: getTotal(cartx),
      });
    }

    try {
      const response = await fetch("/api/checkout_session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart, email: info.email }),
      });

      const session = await response.json();

      if (response.ok) {
        const stripe = await getStripe();
        stripe.redirectToCheckout({ sessionId: session.id });

        //save the order details. and remove item from cart.
        await sendDoc({
          path: "/order",
          data: cartx,
          feedback: () => alert("Order has been placed."),
        });
      } else {
        console.error(session.message); // Handle errors here
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  const getTotal = (product) => {
    const realPrice =
      _.sumBy(product.items, (itm) => itm.price) * product.quantity;
    // get addons.
    let addonPrices = 0;
    for (var ad of product.items) {
      addonPrices = _.sumBy(ad.addons, (ax) => ax.price);
    }

    return parseFloat(
      parseFloat(serviceCharge.charge) +
        parseFloat(charges?.charge) +
        parseFloat(realPrice) +
        addonPrices
    ).toFixed(2);
  };

  return (
    <div className="absolute flex top-0 -left-10  right-0 bottom-0 z-10">
      <div
        onClick={() => close()}
        className="container mx-auto flex-1 relative"
      >
        {/* cart modal */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute flex flex-col w-svw md:w-2/6 bottom-0 md:bottom-auto md:min-h-[60vh] overflow-y-auto bg-white border border-gray-100 rounded-md right-0 top-48 z-10 p-5"
        >
          <button
            onClick={() => close()}
            className="bg-gray-100 p-2 w-fit rounded-full"
          >
            <HiX size={18} />
          </button>
          {info.cart?.length < 1 ? (
            <div className="flex flex-1 flex-col items-center justify-center space-y-1">
              <HiShoppingCart size={60} color="gray" />
              <p className="text-center w-2/3 text-sm text-gray-400 leading-relaxed">
                Add items from a restaurant or store to start a new cart
              </p>
            </div>
          ) : (
            <div className="flex flex-col space-y-5 flex-1 pt-5 ">
              <div className="bg-gray-100 p-5 rounded-md flex space-x-2 items-center cursor-pointer">
                <HiLocationMarker size={30} color="gray" />
                <div className="flex flex-col space-y-1">
                  <p className="text-xs font-light">Delivery Location</p>
                  <p className="text-sm  font-medium">
                    {localStorage.getItem("address")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                {info.cart?.map((product, index) => (
                  <div className="flex flex-col" key={index}>
                    <h3>#{index + 1}</h3>
                    {product.items?.map((info, idx) => (
                      <div
                        className="flex flex-col justify-between gap-3"
                        key={idx}
                      >
                        <div className="flex flex-row items-center justify-between space-x-3">
                          <div className="flex gap-3 items-center">
                            <select
                              className="bg-gray-100 px-2 rounded py-1"
                              value={product.quantity}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                            </select>
                            <p className="text-sm font-medium">{info?.name}</p>
                          </div>
                          <p className="text-lg font-bold">${info?.price}</p>
                        </div>

                        <div className="p-2 ">
                          <table className="table-auto p-2 w-full">
                            <thead>
                              <tr className="border-y bg-gray-50 text-gray-500 font-semibold">
                                <td className="p-2">Addon</td>
                                <td className="p-2">Quantity</td>
                                <td className="p-2">Price</td>
                              </tr>
                            </thead>
                            <tbody>
                              {info.addons?.map((ad, idx) => (
                                <tr key={idx} className="border-b text-sm">
                                  <td className="p-2">{ad.description}</td>
                                  <td className="p-2">{ad.quantity}</td>
                                  <td className="p-2">{ad.price}</td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr className="text-sm">
                                <td className="p-2">Delivery Fees</td>
                                <td
                                  className="p-2"
                                  onClick={() =>
                                    getDeliveryCharge(product?.storeID)
                                  }
                                >
                                  Show
                                </td>
                                <td className="p-2 flex items-center gap-3">
                                  <p>{show && charges?.charge}</p>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex flex-row items-center justify-between border-b pb-3">
                          <p>Service Fees :</p>
                          <p>${serviceCharge?.charge}</p>
                        </div>
                        <button
                          disabled={isLoading}
                          onClick={() => {
                            //   setCart(product);
                            handleSubmit(product);
                          }}
                          className="bg-black p-3 rounded text-white font-medium"
                        >
                          Checkout ${getTotal(product)}
                        </button>

                        {/* <p className="text-sm font-light">${product?.price}</p> */}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
