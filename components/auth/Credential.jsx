import React from "react";

export default function Credential({ next }) {
  return (
    <div className="flex  flex-col px-5 pt-10 md:w-1/4 space-y-4 text-sm md:p-5">
      <h3 className="text-2xl text-gray-600 font-medium leading-relaxed">
        What's your phone number or email ?
      </h3>

      <div className="w-full bg-gray-100 p-4 flex rounded-lg">
        <input
          className="bg-transparent flex-1"
          type="text"
          placeholder="Enter your phone number or email"
        />
      </div>

      <button
        onClick={next}
        className="bg-black text-white font-medium p-4 rounded-lg"
      >
        Continue
      </button>

      <div className="flex items-center space-x-3">
        <div className="border-b flex-1"></div>
        <p className="text-gray-400">or</p>
        <div className="border-b flex-1"></div>
      </div>
      <div className="flex flex-col space-y-3 text-sm">
        <button className="flex items-center space-x-2 justify-center bg-gray-100 p-3 rounded-md">
          <img className="w-8 h-8" src="/assets/google.jpg" />
          <p className="text-gray-700 font-medium">Continue with Google</p>
        </button>

        <button className="flex items-center space-x-2 justify-center bg-gray-100 p-3 rounded-md">
          <img className="w-12 h-8 " src="/assets/apple.jpg" />
          <p className="text-gray-700 font-medium">Continue with Apple</p>
        </button>

        <button className="flex items-center space-x-2 justify-center bg-gray-100 p-3 rounded-md">
          <img className="w-8 h-8" src="/assets/facebook.png" />
          <p className="text-gray-700 font-medium">Continue with Facebook</p>
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <div className="border-b flex-1"></div>
        <p className="text-gray-400">or</p>
        <div className="border-b flex-1"></div>
      </div>

      <p className="text-gray-500 text-xs leading-relaxed text-center">
        By proceeding, you consent to get calls, SMS or Email messages,
        including by automated means, from Eyepa Delivery and its affiliates to the number
        provided.
      </p>
    </div>
  );
}
