import React, { memo } from "react";
import ShopTittle from "../../components/ShopTittle";
import Card from "../../components/Card";
import CardShapeSquare from "../../components/Card/CardShapeSquare";
import ShapeSquare from "../../components/Card/ShapeSquare";

export const shopPhones = () => {
  const data = [
    { title: " All Models" },
    { title: " Shopping Guides" },
    { title: "Ways to Save" },
    { title: "Setup and Support" },
    { title: "The Mac Experience" },
    { title: "Special Stores" },
    { title: "Next" },
  ];
  const dataIphone = [
    {
      name: "iPhone 15 Pro & iPhone 15 Pro Max",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
    },
    {
      name: "iPhone 14 & iPhone 14 Plus",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
    },
    {
      name: "iPhone 14 Pro & iPhone 14 Pro Max",
      price:
        " From $799or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1663611329492",
    },
    {
      name: "iPhone 14 & iPhone 14 Plus",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958160674",
    },
    {
      name: "iPhone 13 mini & iPhone 13",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958176452",
    },
    {
      name: "iPhone 12",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1661958189616",
    },
  ];
  const Shopping = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-compare-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692912411334",
      product: "COMPARE ALL MODELS",
      discribe: "Which iPhone is right for you?",
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-tradein-video-card-202302?wid=778&hei=810&fmt=jpeg&qlt=90&.v=1677015907650",
      product: "WATCH AND LEARN",
      discribe: "How to trade in your iPhone.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carrier-202302?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1675444852029",
      product: "WATCH AND LEARN",
      discribe: "How to save on iPhone with carrier deals at Apple.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-whyswitch-202209_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1661531245920",
      product: "SWITCH TO IPHONE",
      discribe: "Switching to iPhone is super simple. ",
      price: "",
      type: 2,
    },
  ];
  const WaysToSave = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-tradein-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692912409258",
      product: "APPLE TRADE IN",
      discribe:
        "Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carriertrade-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1693606978377",
      product: "CARRIER TRADE-IN DEALS",
      discribe:
        "iPhone carrier deals. Right here at Apple. For as low as $0.¹ ",
      price:
        "Includes trade-in and carrier credits. AT&T: up to $1000. T-Mobile: up to $800. Verizon: up to $830.",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-applecard-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1625761620000",
      product: "APPLE CARD",
      discribe:
        "Pay 0% APR over 24 months when you choose to check out with Apple Card Monthly Installments.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-iup-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692892852623",
      product: "APPLE TRADE IN",
      discribe: "The easiest way to upgrade to the latest iPhone.",
      price:
        "Get the latest iPhone every year, low monthly payments, and AppleCare+.",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-refurb-202202?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1643155828000",
      product: "CERTIFIED REFURBISHED",
      discribe:
        "Shop refurbished Apple products backed by a one‑year warranty. ",
      price:
        "Get the latest iPhone every year, low monthly payments, and AppleCare+.",
      type: 2,
    },
  ];
  const SetupAndSupport = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-quick-start-202302?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1675444851447",
      product: "WATCH AND LEARN",
      discribe: "Use Quick Start to set up and transfer data.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-setup-202304?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1680732480421",
      product: "SETUP GUIDE",
      discribe: "Step-by-step on how to easily setup your new iPhone. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-video-card-50-activation-202303?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1677868375449",
      product: "WATCH AND LEARN",
      discribe: "Want to activate service on a new iPhone?",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carrier-202309_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1692912496899",
      product: "CARRIER CONNECTIVITY",
      discribe: "iPhone and eSIM — a simpler way to connect to your carrier. ",
      price: "",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-applecare-202302?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1675444850645",
      product: "WATCH AND LEARN",
      discribe: "How AppleCare+ protects your iPhone.",
      price: "",
      type: 2,
    },
  ];
  const Accessories = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3G3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693593632903",
      title: "New",
      discribe: "iPhone 15 FineWoven Case with MagSafe - Pacific Blue",
      price: "$89.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4J3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693594197616",
      title: "New",
      discribe:
        " AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
      price: "$59.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2N3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692994298447",
      title: "New",
      discribe: "iPhone FineWoven Wallet with MagSafe - Black",
      price: "$59.00",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT223?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693248280978",
      title: "New",
      discribe: "iPhone 15 Pro Clear Case with MagSafe",
      price: "$39.00",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1661269793559",
      title: "New",
      discribe: "iPhone 15 Pro Clear Case with MagSafe",
      price: "$39.00",
      type: 2,
    },
  ];
  const experience = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-mls-202307?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1690223894831",
      product: "",
      discribe: "",
      price: "",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-fitnessplus-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692912411316",
      product: "FITNESS+",
      discribe: "Get 3 months free when you buy an iPhone.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-airpods-202209?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1661626394670",
      product: "AIRPODS ",
      discribe: "Magic runs in the family. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-ios-202309_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1694105688977",
      product: "",
      discribe: "Explore iOS 17. Packed with new features for iPhone.",
      price: "",
      type: 2,
    },
  ];
  return (
    <div>
      <ShopTittle data={data} title={"Shop iPhone"} />
      <Card
        data={dataIphone}
        title={"All models."}
        titleTwo={" Take your pick."}
      />
      <CardShapeSquare
        data={Shopping}
        title={"Shopping guides. "}
        titleTwo={"Can’t decide? Start here."}
      />
      <CardShapeSquare
        data={WaysToSave}
        title={"Ways to save. "}
        titleTwo={"Find what works for you."}
      />
      <CardShapeSquare
        data={SetupAndSupport}
        title={"Setup and support."}
        titleTwo={"Our Specialists are here to help."}
      />
      <ShapeSquare
        data={Accessories}
        titleOne={"Accessories."}
        titleTwo={"Essentials that pair perfectly with your favorite devices."}
      />
      <CardShapeSquare
        data={experience}
        title={"The iPhone experience."}
        titleTwo={"Designed to connect with everything Apple."}
      />
    </div>
  );
};

export default memo(shopPhones);
