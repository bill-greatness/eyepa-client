import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([
    {
      name: "Chick-fil-A Chick-n-Mini",
      price: "13.85",
      quantity: 1,
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/832c4dd1ff6d9232d9fcc97ac4468b0c/a19bb09692310dfd41e49a96c424b3a6.jpeg",
    },
    {
      name: "Chick-fil-A Chick-n-Minis™ Meal",
      price: "18.85",
      quantity: 1,
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/832c4dd1ff6d9232d9fcc97ac4468b0c/a19bb09692310dfd41e49a96c424b3a6.jpeg",
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
