import React, { memo } from "react";
import Rating from "../Rate";

const Card = (data: any) => {
  const handleRatingChange = (rating: number | null) => {
    // Xử lý logic khi đánh giá thay đổi
    console.log("Đánh giá mới:", rating);
  };

  // const data = [
  //   {
  //     name: "iPhone 14 Pro & iPhone 14 Pro Max",
  //     price:
  //       " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1663611329492",
  //   },
  //   {
  //     name: "iPhone 14 & iPhone 14 Plus",
  //     price:
  //       " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958160674",
  //   },
  //   {
  //     name: "iPhone 13 mini & iPhone 13",
  //     price:
  //       " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958176452",
  //   },
  //   {
  //     name: "iPhone 12",
  //     price:
  //       " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1661958189616",
  //   },
  // ];

  return (
    <div
      className="overflow-x-scroll scrollbar-hide py-6"
      style={{
        overscrollBehaviorX: "contain",
        scrollSnapType: "x mandatory",
      }}
    >
      <div
        className="flex flex-row flex-nowrap "
        style={{
          width: `${data.data.length * 400}px`,
        }}
      >
        {data.data.map((e: any) => (
          <div
            className="flex flex-row flex-nowrap"
            style={{
              width: `${data.data.length * 400}px`,
            }}
          >
            <div className="translate-x-[320px] mr-[15px] w-[420px] h-[500px] bg-white border border-gray-300 shadow-xl hover:shadow-2xl overflow-hidden  hover:scale-[1.01] duration-500 flex flex-col rounded-2xl relative">
              <div className="h-1/5 flex flex-col text-left pl-14 pt-6">
                <span className="text-orange-800 text-sm ">NEW</span>
                <span className="text-gray-900 text-2xl max-w-xs font-semibold">
                  {e.name}
                </span>
              </div>
              <img className=" w-auto h-3/5 px-14 py-8" src={e.image} alt="" />
              <div className="h-1/5 flex flex-row justify-around text-left px-8">
                <span className="max-w-[250px] text-sm">{e.price}</span>
                <button className="bg-blue-500 w-14 h-8 p-1 text-white font-light text-center rounded-3xl cursor-pointer hover:bg-blue-600">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(Card);
