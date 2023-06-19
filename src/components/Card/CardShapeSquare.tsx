import React from "react";

function CardShapeSquare() {
  return (
    <div className="mt-5">
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">Help is here .</h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500">
          {" "}
          Whennever and however you need it
        </h1>
      </div>
      <div
        className="overflow-x-scroll "
        style={{
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
        }}
      >
        <div className="flex flex-row flex-nowrap">
          <img
            src=""
            alt=""
            className="w-[480px] h-[500px] bg-red-300 rounded-2xl translate-x-[320px]"
          />
          <img
            src=""
            alt=""
            className="w-[480px] h-[500px] bg-red-300 rounded-2xl translate-x-[320px]"
          />
          <img
            src=""
            alt=""
            className="w-[480px] h-[500px] bg-red-300 rounded-2xl translate-x-[320px]"
          />
          <img
            src=""
            alt=""
            className="w-[480px] h-[500px] bg-red-300 rounded-2xl translate-x-[320px]"
          />
        </div>
      </div>
    </div>
  );
}
export default CardShapeSquare;
