import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/ToopBar";
import Home from "./containers/home";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CardMedium from "./components/Card/CardMedium";
import CardShapeSquare from "./components/Card/CardShapeSquare";
import ListFarvoriteProduct from "./containers/home/components/ListFarvoriteProduct";
import Card from "./components/Card";

function App() {
  const [img, setImg] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [discribe, setDiscribe] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [typeImg, setTypeImg] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const data = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677311465897",
      product: "IPhone 14 Pro",
      discribe: "Pro. Beyond.",
      price:
        "From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote ",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182",
      product: "MACBOOK AIR 15”",
      discribe: "Impressively big. Impossibly thin.",
      price:
        "From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote ",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1685655505966",
      product: "LIMITED TIME OFFER”",
      discribe: "Save on Mac or iPad for college.",
      price:
        "Save on Mac or iPad with education pricing. Plus get a gift card up to $150,footnote1 20% off AppleCare+,2 and more.",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374",
      product: "iPad Air”",
      discribe: "Light. Bright. Full of might.",
      price: "From $599 or $49.91/mo.per month for 12 mo.monthsFootnote* ",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1660686053448",
      product: "APPLE WATCH ULTRA”",
      discribe: "Adventure awaits.",
      price: "From $799 or $33.29/mo.per month for 24 mo.monthsFootnote†",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-se-pride-202305?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1682613104261",
      product: "PRIDE EDITION SPORT BAND",
      discribe: "Pride is in the air..",
      price: "From $49 or",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677558944069",
      product: "IPHONE 14",
      discribe: "Wonderfull.",
      price:
        "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677224522003",
      product: "APPLE WATCH SERIES 8",
      discribe: "A healthy leap ahead.",
      price: "From $399 or $16.62/mo.per month for 24 mo.monthsFootnote†",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1667423474414",
      product: "IPAD PRO",
      discribe: "Supercharged by M2.",
      price: "From $799 or $66.58/mo.per month for 12 mo.monthsFootnote†",
      type: 1,
    },
  ];
  const newData = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-education-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627664746000",
      product: "Education",
      discribe:
        "Save on Mac or iPad with education pricing.1- (Opens in a new window)",
      price: "Great",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1660927783133",
      product: "BUSINESS",
      discribe: "From enterprise to small business, we’ll work with you.1 ",
      price: "",
      type: 1,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670437406729",
      product: "GOVERNMENT”",
      discribe:
        "Special pricing is available for state, local, and federal agencies.1",
      price:
        "Save on Mac or iPad with education pricing. Plus get a gift card up to $150,footnote1 20% off AppleCare+,2 and more.",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-veteran-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1664401890873",
      product: "VETERANS AND MILITARY",
      discribe:
        "Active and veteran members may be eligible for exclusive savings.1",
      price: "From $599 or $49.91/mo.per month for 12 mo.monthsFootnote* ",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1677655420359",
      product: "Apple watch & Iphone",
      discribe: "Discover all the ways to use Apple Pay.",
      price: "",
      type: 2,
    },
  ];
  const dataIphone = [
    {
      name: "iPhone 14 Pro & iPhone 14 Pro Max",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
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
  const dataAppleWatch = [
    {
      name: "Apple Watch Ultra",
      price:
        " From $699or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=680&hei=528&fmt=png-alpha&.v=1678733152901",
    },
    {
      name: "Apple Watch Series 8",
      price:
        " From $599or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s8-202303?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1676335512343",
    },
    {
      name: "Apple Watch SE",
      price:
        " From $399or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202303?wid=680&hei=528&fmt=png-alpha&.v=1676335512377",
    },
    {
      name: "Apple Watch Hermès",
      price:
        " From $399or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202303?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1676335512238",
    },
  ];

  return (
    <div className="App">
      <div className="bg-slate-50">
        <TopBar />
        <div>
          <Banner />
        </div>
        <div className="mx-80 ">
          <Home />
        </div>
        <Card data={dataIphone} />
        <div className="my-4">
          {" "}
          <Card data={dataMac} />
        </div>
        <div className="my-4">
          {" "}
          <Card data={dataIpad} />
        </div>
        <div className="my-4">
          {" "}
          <Card data={dataAppleWatch} />
        </div>
        <CardMedium data={data} />
        <CardShapeSquare />
        <CardMedium data={newData} />
        <div className="pt-10">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
