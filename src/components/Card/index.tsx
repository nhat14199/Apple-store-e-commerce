import React, { memo } from "react";
import Rating from "../Rate";

const Card = () => {
  const handleRatingChange = (rating: number | null) => {
    // Xử lý logic khi đánh giá thay đổi
    console.log("Đánh giá mới:", rating);
  };

  return (
    <div className=" w-64 h-96 bg-white rounded-md border border-gray-300 shadow-xl hover:shadow-2xl overflow-hidden  hover:scale-[1.01] duration-500">
      <div className="h-3/4 ">
        <div className="h-5/6">
          {" "}
          <img
            className="h-auto pt-6 pl-2 pr-2 "
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt=""
          />
        </div>

        <div className="h-1/6 cursor-pointer">
          <Rating onChange={handleRatingChange} />
        </div>
      </div>
      <div className="h-1/4 bg-gray-100 pt-2 ">
        <h1 className=" font-medium text-base text-left pl-3">Card title</h1>
        <p className="text-left pl-3 font-light text-sm ">
          Some quick example text to build on the card title and
        </p>
      </div>
    </div>
  );
};
export default memo(Card);
