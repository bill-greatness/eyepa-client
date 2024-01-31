import Script from "next/script";
import Image from "next/image";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import LocationContextProvider from "../context/Location";
import AuthContextProvider from "../context/Authentication";
import CartContextProvider from "../context/Cart";

function MyApp({ Component, pageProps }) {

  const [googleApiLoaded, setGoogleApiLoaded] = useState(false);

  return <AuthContextProvider>
    <CartContextProvider>

      <LocationContextProvider>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA-a5Toku6TZnzEUwSSWHHkvGSkpMvwrMo&libraries=places`}
          onLoad={() => setGoogleApiLoaded(true)}
        />
        {googleApiLoaded ? <Component {...pageProps} /> : <div className="flex h-screen w-screen  flex-col items-center justify-center">
          <Image
            className="rounded-xl animate-pulse"
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>}
      </LocationContextProvider>
    </CartContextProvider>
  </AuthContextProvider>
}

export default MyApp;
