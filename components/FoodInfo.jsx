import React from "react";

export default function FoodInfo({ close, food, setAdd }) {
  return (
    <div
      onClick={close}
      className="bg-black/40 flex items-center justify-center absolute top-0 left-0 bottom-0 right-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-3/5 h-3/5 bg-white flex flex-col md:flex-row p-2"
      >
        <div className="flex-1 flex   md:m-10 overflow-hidden">
          <img className="flex-1 object-cover" src={food?.photo} />
        </div>
        <div className="flex-1 flex flex-col space-y-3 md:py-10 md:pr-10">
          <h3 className="font-bold text-2xl">{food?.name}</h3>
          <p className="text-sm font-light leading-relaxed">
            {food?.description}
          </p>
          <p className="text-sm font-medium">${food?.price}</p>

          <div className="pt-5">
            <button
              onClick={() => setAdd(food)}
              className="border text-sm font-medium border-yellow-400 bg-yellow-400 w-full p-4 rounded-md"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
