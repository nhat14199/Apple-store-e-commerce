import React from "react";
import Card from "../../../components/Card";

export const ShopMac = () => {
  const dataMac = [
    {
      name: "MacBook Air 13” and 15” with M2 chip",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1684262493564",
    },
    {
      name: "MacBook Pro 14” and 16”",
      price:
        " From $1999or $413.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670463778272",
    },
    {
      name: "iMac 24”",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=90&.v=1625868688000",
    },
    {
      name: "Mac mini",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872",
    },
    {
      name: "iMac 24”",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=90&.v=1625868688000",
    },
    {
      name: "Mac mini",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872",
    },
  ];
  return (
    <div>
      <div className="bg-gray-50 ">
        <div className="text-left pl-[320px] flex ">
          <h1 className="text-3xl font-semibold pr-2">All models.</h1>{" "}
          <h1 className="text-3xl font-semibold text-gray-500">
            {" "}
            Take your pick.
          </h1>
        </div>
        <Card data={dataMac} />
        <div className="text-left pl-[320px] flex mt-10">
          <h1 className="text-3xl font-semibold pr-2">Shopping guides.</h1>{" "}
          <h1 className="text-3xl font-semibold text-gray-500">
            {" "}
            Can’t decide? Start here.
          </h1>
        </div>
        <Card data={dataMac} />
        <Card data={dataMac} />
      </div>
    </div>
  );
};
export default ShopMac;
