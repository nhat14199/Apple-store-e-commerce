import React from "react";
import ShopTittle from "../../components/ShopTittle";
import Card from "../../components/Card";
import CardShapeSquare from "../../components/Card/CardShapeSquare";
import ShapeSquare from "../../components/Card/ShapeSquare";
import MediumCard from "../../components/Card/MediumCard";

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
  const whenever = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-compare-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1666115025411",
      product: "COMPARE ALL MODELS",
      discribe: "Which iPad is right for you?",
      price: "",
      type: 2,
    },
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-shop0-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1695232630251",
      product: "MAC SPECIALIST",
      discribe: "Shop one on one with a Specialist. Online or in a store.",
      price: "",
      type: 2,
    },
  ];
  const Ways = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-trade-in-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664552247673",
      product: "APPLE TRADE IN",
      discribe: "Trade in your device, get credit toward a new one.¹  ",
      price: "",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-apple-card-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1625760821000",
      product: "APPLE CARD",
      discribe: "Get 3% back in Daily Cash with Apple Card.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664396475865",
      product: "LOW MONTHLY PAYMENTS",
      discribe:
        "Pay 0% APR over 12 months when you choose to check out with Apple Card Monthly Installments.² ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-refurb-202202?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1643155826000",
      product: "CERTIFIED REFURBISHED",
      discribe:
        "Shop refurbished Apple products backed by a one‑year warranty. ",
      price: "",
      type: 2,
    },
  ];
  const Accessories = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1664481896795",

      discribe: "Smart Folio for iPad (10th generation) - Watermelon",
      price: "$79.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1564075356758",
      discribe: "Apple Pencil (1st generation)",
      price: "99.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3LL?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1665678027202",
      discribe:
        "Magic Keyboard for iPad Pro 11-inch (4th generation) and iPad Air (5th generation) - US English - White",
      price: "$299.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1540596407165",
      discribe: "Apple Pencil (2nd generation)",
      price: "$129.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1664481446939",
      discribe:
        "Magic Keyboard with Touch ID and Numeric Keypad for Mac models with Apple silicon - US English - Black Keys",
      price: "$249.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645642314258",
      discribe: "Smart Folio for iPad Air (5th generation) - English Lavender",
      price: "$79.00",
      type: 2,
    },
  ];
  const TheIPad = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-why-ipad-202210?wid=960&hei=1000&fmt=png-alpha&.v=1664988172526",
      product: "Why Ipad",
      discribe: "Yes, it does that. And then some. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696949431686",
      product: "EASY DATA TRANSFER",
      discribe: "Get 3 months of Apple TV+ free when you buy an iPad.°  ",
      price: "",
      type: 1,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-ipados-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664997552091",
      product: "IPADOS",
      discribe: "Work wonders. With ease. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626831752000",
      product: "One",
      discribe: "Six Apple services. One easy subscription. ",
      price: "",
      type: 2,
    },
  ];
  const newData = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-education-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627664746000",
      product: "Education",
      discribe: "We offer special iPad pricing for students and educators.³  ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-business-202210?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1664998875520",
      product: "BUSINESS",
      discribe: "From enterprise to small business, we’ll work with you.³ ",
      price: "",
      type: 1,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-government-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1664401863778",
      product: "GOVERNMENT",
      discribe:
        "Special pricing is available for state, local, and federal agencies.³ ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692805927436",
      product: "VETERANS AND MILITARY",
      discribe:
        "Active and veteran members may be eligible for exclusive savings.³ ",
      price: "",
      type: 2,
    },
  ];
  return (
    <div className="bg-slate-50">
      <ShopTittle data={data} title={"Shop Ipad"} />
      <Card
        data={dataIpad}
        title={"All models. "}
        titleTwo={"Take your pick."}
      />
      <CardShapeSquare
        data={whenever}
        title={"Shopping guides."}
        titleTwo={"Can’t decide? Start here."}
      />
      <CardShapeSquare
        data={Ways}
        title={"Ways to save."}
        titleTwo={" Find what works for you."}
      />
      <ShapeSquare
        data={Accessories}
        titleOne={"iPad accessories."}
        titleTwo={"Work and create with ease."}
      />
      <CardShapeSquare
        data={TheIPad}
        title={"The iPad experience."}
        titleTwo={"Designed to connect with everything Apple."}
      />
      <MediumCard
        data={newData}
        titleOne={"Special stores. "}
        titleTwo={"Exclusive savings for businesses, school, and more."}
      />
    </div>
  );
};

export default shopIpad;
