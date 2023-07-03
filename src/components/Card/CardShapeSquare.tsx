import React from "react";

function CardShapeSquare() {
  const data = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-specialist-help-202303?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1678742761914",
      product: "Shop with a Specialist over video.",
      discribe: "Shop one on one with a Specialist. Online or in a store.",
      price: "Choose your next iPhone in a guided, one-way video session.",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1684946879038",
      product: "APPLE SPECIALIST",
      discribe: "Shop one on one with a Specialist. Online or in a store.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-202303?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1679429097366",
      product: "APPLE TV+",
      discribe: "Get 3 months of Apple TV+ free when you buy an Apple device.",
      price: "Choose your next iPhone in a guided, one-way video session.",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000",
      product: "",
      discribe:
        "Six Apple services. One easy subscription.- (Opens in a new window)",
      price: "",
      type: 2,
    },
  ];
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
        className="overflow-x-scroll py-6 scrollbar-hide"
        style={{
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
        }}
      >
        <div
          className="flex flex-row flex-nowrap "
          style={{
            width: `${data.length * 480}px`,
          }}
        >
          {data.map((e, index) => (
            <div
              className="pt-2 "
              key={index}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <div
                className={`translate-x-[320px] hover:scale-[1.01] mr-[20px] w-[480px]  hover:bg-opacity-90  relative shadow-md rounded-2xl border border-gray-300  hover:shadow-xl duration-500 ${
                  e.type == 2 ? "text-gray-950" : "text-white"
                } `}
              >
                <img
                  key={index}
                  className="rounded-2xl w-[480px] "
                  src={e.image}
                  alt=""
                />
                <div className="absolute  top-4 left-10 flex flex-col text-left max-w-[400px]">
                  <h1 className="text-xs font-normal py-1">{e.product}</h1>
                  <h1 className="text-xl font-normal">{e.discribe}</h1>
                  <h1 className="text-sm font-light py-1">{e.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CardShapeSquare;
