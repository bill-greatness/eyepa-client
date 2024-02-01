import React, { useState } from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
// import { HiLocationMarker } from "react-icons/hi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import CompletePlaces from "react-places-autocomplete";

export default function Landing() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-hidden bg-gray-50">

      <Header
        title={"Eyepa  Delivery Services"}
        description={"Get all you item delivered by just a click away"}
      />

      <div className="container mx-auto flex h-[70vh] overflow-hidden flex-col px-5 md:px-0 md:flex-row">
        <div className="flex flex-1 flex-col justify-center space-y-5  md:pr-10">
          <div className="flex flex-col">
            <p className="font-bold text-3xl leading-loose text-yellow-500 hidden md:flex">
              Eyepa Meal Order,
            </p>
            <p className="font-bold text-3xl leading-loose text-center px-3 md:px-0 md:text-left">
              The food you love, delivered fast
            </p>
          </div>
          <div className=" md:w-3/4 flex flex-col items-start space-y-10 relative">
            <div className=" w-[90%] md:w-3/4 z-[5] p-3 bg-white absolute rounded-md border border-gray-100 flex items-center space-x-2 px-3">
              <CompletePlaces
                value={location}
                onChange={setLocation}
                apiKey="AIzaSyA-a5Toku6TZnzEUwSSWHHkvGSkpMvwrMo"
                onSelect={(address, placeId) => {console.log(address);router.push('/feeds')}}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div className="flex flex-1 flex-col">
                    <input
                      {...getInputProps({
                        placeholder: "Search Find Address",
                        className:
                          "placeholder:text-gray-500 flex-1 w-full py-3 md:py-2",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "bg-gray-100 p-2"
                          : "border-b p-2";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            key={suggestion.index}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CompletePlaces>
            </div>

            <div className="pt-14">
              <button
                disabled={!location}
                onClick={() => router.push("/feeds")}
                className="bg-yellow-500 px-8 py-3  text-white rounded-md font-medium mx-auto md:mx-0"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1  overflow-hidden">
          <img
            className="rounded-xl rotate-180 md:rotate-0 object-cover mx-auto"
            src="/assets/cover.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="flex flex-col px-5 bg-white">
        <div className="bg-white flex min-h-[70vh] py-10">
          <div className="flex-1 flex container md:mx-auto flex-col-reverse md:flex-row">
            <div className="flex-1 flex flex-col space-y-8">
              <h3 className="text-3xl leading-relaxed md:w-1/2 font-bold text-gray-700">
                Make money with food delivery
              </h3>

              <div className="flex flex-col space-y-5">
                <div className="w-4/5 flex-col flex space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="h-5 w-5 bg-yellow-500 flex items-center justify-center text-white rounded-full text-xs">
                      <p>1</p>
                    </div>
                    <h4 className="flex items-center space-x-3 font-medium text-lg text-gray-600">
                      Earn extra income, fast!
                    </h4>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed">
                    There’s no subscription fee. You’ll receive your earnings at
                    the end of each week.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex mb-10 md:mb-0">
              <Image
                className="rounded-xl"
                src="/assets/courier.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>

        <div className="bg-white flex min-h-[70vh] py-10">
          <div className="flex-1 flex container md:mx-auto flex-col md:flex-row">
            <div className="flex-1 flex mb-10 md:mb-0">
              <Image
                className="rounded-xl"
                src="/assets/bolt-food-bag.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="flex-1 flex flex-col space-y-8">
              <h3 className="text-3xl leading-relaxed md:w-1/2 font-bold text-gray-700">
                Boost your sales
              </h3>

              <div className="flex flex-col space-y-5">
                <div className="w-4/5 flex-col flex space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="h-5 w-5 bg-yellow-500 flex items-center justify-center text-white rounded-full text-xs">
                      <p>1</p>
                    </div>
                    <h4 className="flex items-center space-x-3 font-medium text-lg text-gray-600">
                      Earn extra income, fast!
                    </h4>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed">
                    There’s no subscription fee. You’ll receive your earnings at
                    the end of each week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex min-h-[70vh] py-10">
          <div className="flex-1 flex container md:mx-auto flex-col-reverse md:flex-row">
            <div className="flex-1 flex flex-col space-y-8">
              <h3 className="text-3xl leading-relaxed md:w-4/6 font-bold text-gray-700">
                Discover, order, and track in the app
              </h3>

              <div className="flex flex-col space-y-5">
                <div className="w-4/5 flex-col flex space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="h-5 w-5 bg-yellow-500 flex items-center justify-center text-white rounded-full text-xs">
                      <p>1</p>
                    </div>
                    <h4 className="flex items-center space-x-3 font-medium text-lg text-gray-600">
                      Earn extra income, fast!
                    </h4>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed">
                    There’s no subscription fee. You’ll receive your earnings at
                    the end of each week.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex mb-10 md:mb-0">
              <Image
                className="rounded-xl"
                src="/assets/image.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white pb-5">
        <div className="container mx-auto flex flex-col space-y-3">
          <h3 className="text-center text-xl md:text-3xl font-bold py-10">
            Frequently Asked Questions
          </h3>

          <div className="flex flex-col space-y-5 items-center px-5 md:px-0">
            <div className="md:w-2/4 border shadow bg-white border-gray-300 rounded-lg p-5 flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-left text-lg text-gray-800 font-medium">
                  How can I find delivery restaurants near me?
                </h3>
                <button className="bg-gray-100 rounded-full p-1">
                  <HiChevronDown size={18} />
                </button>
              </div>
              <p className="text-base text-gray-500">
                Eyepa Food has a huge selection of restaurants and stores in
                your city. Just enter your address or turn on “location
                services”, and you’ll be able to see which restaurants deliver
                near you.
              </p>
            </div>
          </div>

          <button className="bg-gray-200 w-fit mx-auto px-3 text-sm font-medium py-2 text-gray-600 rounded-full">
            View more
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
