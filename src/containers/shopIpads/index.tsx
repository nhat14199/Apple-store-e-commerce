import React from "react";
import ShopTittle from "../../components/ShopTittle";
import Card from "../../components/Card";

export const shopIpad = () => {
  const data = [
    { title: " All Models" },
    { title: " Shopping Guides" },
    { title: "Ways to Save" },
    { title: "Setup and Support" },
    { title: "The Mac Experience" },
    { title: "Special Stores" },
    { title: "Next" },
  ];
  const dataIpad = [
    {
      name: "iPad Pro",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100",
    },
    {
      name: "iPad Air",
      price:
        " From $599or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574485",
    },
    {
      name: "iPad gen 10",
      price:
        " From $499or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1665519729404",
    },
    {
      name: "iPad gen 9",
      price:
        " From $399or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574498",
    },
    {
      name: "iPad mini",
      price:
        " From $499or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574477",
    },
  ];
  return (
    <div>
      <ShopTittle data={data} title={"Shop Ipad"} />
      <Card
        data={dataIpad}
        title={"All models. "}
        titleTwo={"Take your pick."}
      />
    </div>
  );
};

export default shopIpad;
