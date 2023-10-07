import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/ToopBar";
import Home from "./containers/home";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CardMedium, { MediumCard } from "./components/Card/MediumCard";
import CardShapeSquare from "./components/Card/CardShapeSquare";

import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { log } from "console";
import { ProductService } from "./services/products";
import BelieveMySelf from "./containers/Page/BelieveMySelf";
import Iphone from "./containers/Iphone";
import ShopMac from "./containers/home/shopMac";
import SmallCard from "./components/Card/SmallCard";

function App() {
  const data = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844",
      product: "IPhone 15 Pro",
      discribe: "Titanium",
      price: "From $999 or $41.62/mo.per month for 24 mo*",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=16927199732204",
      product: "IPhone 15 ",
      discribe: "Newphoria",
      price: "From $999 or $41.62/mo.per month for 24 mo*",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508",
      product: "Apple Watch Series 9",
      discribe: "Smarter. Brighter. Mightier.m",
      price: "From $339 or $33.62/mo.per month for 24 mo*",
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677311465897",
      product: "IPhone 14 Pro",
      discribe: "Pro. Beyond.",
      price:
        "From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote ",
      type: 1,
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
  const dataIphonee = [];
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
  const dataMacc = [];
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
    {
      name: "new modal",
      price: "From $199 $21.62mo.per",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-acc-202303?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1676583158437",
    },
  ];
  const trucks = [
    {
      icon: (
        <path
          d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"
          fill="#6CCA4E"
        />
      ),
      type: 1,
      titleOne: "Two-hour delivery ",
      titleTwo: " from an Apple Store, ",
      titleThree: " free delivery, or easy pickup.²",
    },
    {
      icon: (
        <svg
          viewBox="0 0 43 56"
          xmlns="http://www.w3.org/2000/svg"
          className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
          aria-hidden="true"
          role="img"
        >
          <path d="m0 0h43v56h-43z" fill="none"></path>
          <path
            d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
            fill="#007AFF"
          ></path>
          <path
            d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
            fill="#007AFF"
          ></path>
          <path
            d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
            fill="#007AFF"
          ></path>
          <path
            d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
            fill="#007AFF"
          ></path>
        </svg>
      ),
      type: 2,
      titleOne: "Trade in your current device ",
      titleTwo: ".Get credit toward a new one.3 ",
      titleThree: "",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42 56"
          className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
          aria-hidden="true"
          role="img"
        >
          <g>
            <rect width={42} height={56} fill="none" />
            <path
              d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
              fill="#6cca4e"
            />
          </g>
        </svg>
      ),
      type: 1,
      titleOne: "Pay in full or  ",
      titleTwo: " pay over time. ",
      titleThree: "  Your choice.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 43 56"
          xmlns="http://www.w3.org/2000/svg"
          className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
          aria-hidden="true"
          role="img"
        >
          <path d="m0 0h43v56h-43z" fill="none"></path>
          <path
            d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
            fill="#007AFF"
          ></path>
          <path
            d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
            fill="#007AFF"
          ></path>
          <path
            d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
            fill="#007AFF"
          ></path>
          <path
            d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
            fill="#007AFF"
          ></path>
        </svg>
      ),
      type: 2,
      titleOne: "Get a   ",
      titleTwo: " personalized shopping ",
      titleThree: " experience in the Apple Store app.",
    },
    {
      icon: (
        <svg
          height="56"
          viewBox="0 0 35 35"
          width="56"
          className="as-svgicon as-svgicon-personalization as-svgicon-elevated as-svgicon-personalizationelevated"
          role="img"
          aria-hidden="true"
        >
          <path d="m0 0h35v35h-35z" fill="none"></path>
          <path
            d="m17.5 6.1a11.4 11.4 0 1 1 -11.4 11.4 11.4129 11.4129 0 0 1 11.4-11.4m0-1.1a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0 -12.5-12.5zm3.7707 11.3121a1.213 1.213 0 0 0 .9343-.4539 1.8075 1.8075 0 0 0 0-2.269 1.213 1.213 0 0 0 -.9343-.4539 1.2009 1.2009 0 0 0 -.921.4539 1.7981 1.7981 0 0 0 0 2.2624 1.1946 1.1946 0 0 0 .921.4605zm-7.5547 0a1.2454 1.2454 0 0 0 .9476-.4605 1.764 1.764 0 0 0 .0067-2.2624 1.2454 1.2454 0 0 0 -.9543-.4539 1.1813 1.1813 0 0 0 -.9143.4539 1.8311 1.8311 0 0 0 0 2.269 1.1813 1.1813 0 0 0 .9143.4539zm11.9727 2.2157a.655.655 0 0 0 -.6407-.08 27.5372 27.5372 0 0 1 -3.6906.861 24.1545 24.1545 0 0 1 -3.8507.3 24.2809 24.2809 0 0 1 -3.8575-.3 26.9794 26.9794 0 0 1 -3.6839-.861.6922.6922 0 0 0 -.6607.08.6079.6079 0 0 0 -.18.6139 7.7434 7.7434 0 0 0 1.4015 3.6306 8.5219 8.5219 0 0 0 2.9765 2.5961 8.3779 8.3779 0 0 0 4.0043.9677 8.35 8.35 0 0 0 3.9909-.9677 8.5849 8.5849 0 0 0 2.9832-2.5961 7.5976 7.5976 0 0 0 1.3948-3.6306.6384.6384 0 0 0 -.1871-.6139zm-1.4815 2.83a23.8689 23.8689 0 0 1 -3.3169.7008 24.6667 24.6667 0 0 1 -3.3836.2335 24.8628 24.8628 0 0 1 -3.3837-.2335 23.7823 23.7823 0 0 1 -3.33-.7008 6.2135 6.2135 0 0 1 -.694-1.8686 27.7532 27.7532 0 0 0 3.6171.7875 25.529 25.529 0 0 0 3.7908.28 25.5717 25.5717 0 0 0 3.784-.28 27.1787 27.1787 0 0 0 3.61-.7875 6.0407 6.0407 0 0 1 -.6937 1.8682z"
            fill="#AB39FF"
          ></path>
        </svg>
      ),
      type: 3,
      titleOne: "",
      titleTwo: "Make them yours. ",
      titleThree: " Engrave a mix of emoji, names, and numbers for free.",
    },
  ];
  const whenever = [
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000",
      product: "",
      discribe:
        "Six Apple services. One easy subscription.- (Opens in a new window)",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730497948",
      product: "We've got you covered. ",
      discribe:
        "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730632477",
      product: "",
      discribe: "See how one app can control your entire home.",
      price: "",
      type: 2,
    },
  ];
  const titleExperinence = "The Apple experience. ";
  const titleExperinenceTwo = " Do even more with Apple products and services.";

  const titleWhenever = "Help is here ";
  const titleTwo = " .Whennever and however you need it ";

  // useEffect(() => {
  //   const messagingInstance = messaging() ;

  //   messaging
  //     .requestPermission()
  //     .then(() => {
  //       console.log("Notification permission granted.");
  //       return messaging.getToken();
  //     })
  //     .then((token) => {
  //       console.log("FCM token:", token);
  //       // Gửi token này đến máy chủ để gửi thông báo
  //     })
  //     .catch((error) => {
  //       console.log("Error obtaining permission:", error);
  //     });

  //   // Lắng nghe các thông báo đến khi ứng dụng đang hoạt động
  //   messaging.onMessage((payload) => {
  //     console.log("Received message:", payload);
  //     // Xử lý thông báo tại đây (ví dụ: hiển thị thông báo, thông báo âm thanh, v.v.)
  //   });
  // }, []);

  // const getApi = async () => {
  //   try {
  //     const reps = await ProductService.getListProductIphone();
  //     setIphoneList(reps.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getApi();
  // }, []);
  return (
    <div className="App">
      <div className="bg-slate-50">
        <TopBar />
        <Home />
        <MediumCard data={data} />
        <CardShapeSquare
          data={whenever}
          title={titleWhenever}
          titleTwo={titleTwo}
        />
        {/* <Card data={dataIphone} />
        <Card data={dataAppleWatch} />
        <Card data={dataMac} />
        <Card data={dataIpad} /> */}
        <SmallCard data={trucks} />
        <CardShapeSquare
          data={experience}
          title={titleExperinence}
          titleTwo={titleExperinenceTwo}
        />
        <MediumCard data={newData} />
        {/* <Iphone /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
