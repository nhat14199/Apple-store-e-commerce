import React, { memo, useEffect, useState } from "react";
import ShopTittle from "../../components/ShopTittle";
import Card from "../../components/Card";
import CardShapeSquare from "../../components/Card/CardShapeSquare";
import ShapeSquare from "../../components/Card/ShapeSquare";
import MediumCard from "../../components/Card/MediumCard";
import axios from "axios";
import { base_url } from "../../constant/baseUrl";

export const ShopMac = () => {
  const [isLoading, setisLoading] = useState(false);
  const [macData, setMacData] = useState<any>([]);
  const data = [
    { title: " All Models" },
    { title: " Shopping Guides" },
    { title: "Ways to Save" },
    { title: "Setup and Support" },
    { title: "The Mac Experience" },
    { title: "Special Stores" },
    { title: "Next" },
  ];
  const dataMac = [
    {
      name: "MacBook Air 13” and 15” with M2 chip",
      new: "New",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1684262493564",
    },
    {
      name: "MacBook Pro 14” and 16”",
      new: "New",
      price:
        " From $1999or $413.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670463778272",
    },
    {
      name: "MacBook Air 13-inch with M1 chip”",
      new: "",
      price:
        " From $799or $31.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1664576115052",
    },
    {
      name: "MacBook Pro 13”",
      new: "",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1665082744007",
    },
    {
      name: "iMac 24”",
      new: "New",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=90&.v=1625868688000",
    },
    {
      name: "Mac mini",
      new: "New",
      price:
        " From $999or $41.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872",
    },
    {
      name: "Mac Studio",
      new: "New",
      price:
        " From $1999or $159.62/mo.per month for 24 mo.months before trade‑inFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1683842370512",
    },
    // {
    //   name: "Studio Display",
    //   new: "",
    //   price:
    //     " From $1599or $133.62/mo.per month for 24 mo.months before trade‑inFootnote*",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645558306366",
    // },
    // {
    //   name: "Mac Pro",
    //   new: "New",
    //   price:
    //     " From $6999or $538.62/mo.per month for 24 mo.months before trade‑inFootnote*",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202306?wid=645&hei=1000&fmt=p-jpg&qlt=95&.v=1683842370649",
    // },
  ];

  const whenever = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-compare-models-202203?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664611622989",
      product: "COMPARE ALL MODELS",
      discribe: "Which Mac is right for you?",
      price: "",
      type: 2,
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664396475865",
      product: "LOW MONTHLY PAYMENTS",
      discribe:
        "Pay 0% APR over 12 months when you choose to check out with Apple Card Monthly Installments.² ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-tradein-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1651768767939",
      product: "APPLE TRADE IN",
      discribe: "Trade in your device, get credit toward a new one.¹ ",
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWM3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1652736144126",

      discribe: "35W Dual USB-C Port Compact Power Adapter",
      price: "$59.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPL43?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1653520583416",
      discribe: "USB-C to MagSafe 3 Cable (2 m) - Midnight",
      price: "459.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1646446502337",
      discribe: "Studio Display - Standard glass - Tilt-adjustable stand",
      price: "$1559.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301",
      discribe: "Magic Mouse - Black Multi-Touch Surface",
      price: "$99.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645719947833",
      discribe:
        "Magic Keyboard with Touch ID and Numeric Keypad for Mac models with Apple silicon - US English - Black Keys",
      price: "$199.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645136899926",
      discribe: "Magic Trackpad - Black Multi-Touch Surface",
      price: "$149.00",
      type: 2,
    },
  ];
  const Setup = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-transfer-202206_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1664999066587",
      product: "EASY DATA TRANSFER",
      discribe: "New Mac? See how easy it is to move your content over.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-applecare-202111?wid=960&hei=1000&fmt=png-alpha&.v=1635293660000",
      product: "WATCH AND LEARN",
      discribe: "It’s no problem with AppleCare+.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-apps-202211?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1668101973558",
      product: "ONLINE PERSONAL SESSION",
      discribe: "Get to know your new Mac. From the basics to top tips. .",
      price: "",
      type: 2,
    },
  ];

  const theMac = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-why-mac-202206_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1665009188780",
      product: "WHY MAC",
      discribe: "Incredible power. Incredibly simple. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-macos-202110_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1665034325531",
      product: "MAC OS",
      discribe:
        "Works smarter. Plays harder. Goes further. Discover macOS Ventura.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-icloud-202111_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1665105232691",
      product: "ICLOUD+",
      discribe: "Incredible power. Incredibly simple. ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-appleone-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1625760978000",
      product: "",
      discribe: "Six Apple services. One easy subscription. ",
      price: "",
      type: 2,
    },
  ];
  const newData = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-education-202110_GEO_US?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1665016906776",
      product: "Education",
      discribe: "Save on a new Mac with special education pricing.³ ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-business-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627073464000",
      product: "BUSINESS",
      discribe: "From enterprise to small business, we’ll work with you.³ ",
      price: "",
      type: 1,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670437406729",
      product: "GOVERNMENT",
      discribe:
        "Special pricing is available for state, local, and federal agencies.³ ",
      price: "",
      type: 1,
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

  const getAllProducts = async () => {
    setisLoading(true);
    try {
      setisLoading(true);
      const resp = await axios.get(`${base_url}macs`);
      console.log("resp", resp);
      setMacData(resp.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };


  console.log("macData" , macData);
  

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <div className="">...Loading</div>
      ) : (
        <div>
          <ShopTittle data={data} title={"Shop Mac"} />
          <Card
            data={macData}
            type={1}
            title={"All models. "}
            titleTwo={"Take your pick."}
          />
          <CardShapeSquare
            data={whenever}
            title={"The Apple experience. "}
            titleTwo={"Do even more with Apple products and services."}
          />
          <CardShapeSquare
            data={Ways}
            title={"Ways to save."}
            titleTwo={"Find what works for you."}
          />
          <ShapeSquare
            data={Accessories}
            titleOne={"Accessories"}
            titleTwo={"Made for Mac."}
          />
          <CardShapeSquare
            data={Setup}
            title={"Setup and support."}
            titleTwo={"Our Specialists are here to help."}
          />
          <CardShapeSquare
            data={theMac}
            title={"The Mac experience."}
            titleTwo={"Designed to connect with everything Apple.."}
          />
          <MediumCard
            data={newData}
            titleOne={"Special stores. "}
            titleTwo={"Exclusive savings for businesses, school, and more."}
          />
        </div>
      )}
    </>
  );
};
export default memo(ShopMac);
