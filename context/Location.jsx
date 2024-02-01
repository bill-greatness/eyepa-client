import { createContext, useContext, useState } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export default function LocationContextProvider({ children }) {
  const [location, setLocation] = useState();

  const setAddress = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((cord) => {
        setLocation({
          coordinates: [cord.lat, cord.lng],
          fullAddress: address,
          country: address.split(",")[address.split(",").length - 1],
        });

        localStorage.setItem(
          "country",
          address.split(",")[address.split(",").length - 1]
        );
        localStorage.setItem("address", address);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <LocationContext.Provider value={{ location, setAddress }}>
      {children}
    </LocationContext.Provider>
  );
}
