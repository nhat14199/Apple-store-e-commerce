import React, { memo } from "react";
import ShopTittle from "../../components/ShopTittle";
import Card from "../../components/Card";
import CardShapeSquare from "../../components/Card/CardShapeSquare";
import ShapeSquare from "../../components/Card/ShapeSquare";
import MediumCard from "../../components/Card/MediumCard";

export const shopWatch = () => {
  const data = [
    { title: " All Models" },
    { title: " Shopping Guides" },
    { title: "Ways to Save" },
    { title: "Setup and Support" },
    { title: "The Mac Experience" },
    { title: "Special Stores" },
    { title: "Next" },
  ];
  const dataAppleWatch = [
    {
      name: "Apple Watch Series 9",
      price: "From $399or $33.25/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s9-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693943487336",
    },

    {
      name: "Apple Watch Ultra 2",
      price: "From $799or $66.58/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693611623658",
    },
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
  const Ways = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-tradein-202109?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1632173721000",
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
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-monthly-payments-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1695241263632",
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
  const Planet = [
    {
      name: "Starlight Aluminum Case with Starlight Sport Loop",
      price: "From $399 or $33.25/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/45-nc-alum-starlight-sport-loop-starlight-s9?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693282090261",
    },
    {
      name: "Midnight Aluminum Case with Midnight Sport Loop",
      price: "From $249or $20.75/mo. per monthfor 12 mo.monthsFootnote* ",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/44-nc-alum-midnight-sport-loop-midnight?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1695825240245",
    },
    {
      name: "Titanium Case with Indigo Alpine Loop",
      price: "From $249or $20.75/mo. per monthfor 12 mo.monthsFootnote* ",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/49-cell-titanium-alpine-indigo-ultra?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693502121799",
    },
    {
      name: "Titanium Case with Orange/Beige Trail Loop",
      price: "From $799or $66.58/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/49-cell-titanium-trail-orange-beige-ultra?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693504069919",
    },
    {
      name: "Pink Aluminum Case with Light Pink Sport Loop",
      price: "From $399or $33.25/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/45-nc-alum-pink-sport-loop-light-pink-s9?wid=4000&hei=4000&fmt=p-jpg&qlt=95&.v=1693282340775",
    },
    {
      name: "Silver Aluminum Case with Winter Blue Sport Loop",
      price: "From $399or $33.25/mo. per monthfor 12 mo.monthsFootnote*",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/45-nc-alum-silver-sport-loop-winter-blue-s9?wid=4000&hei=4000&fmt=jpeg&qlt=90&.v=1693282340734",
    },
  ];
  const TheWatch = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-watchos-202309_GEO_US?wid=960&hei=1000&fmt=png-alpha&.v=1693958389805",
      product: "watchOS 10",
      discribe: "Check out the latest Apple Watch features.  ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-why-202309?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1692799812920",
      product: "WHY APPLE WATCH",
      discribe: "It’s the ultimate device for a healthy life.  ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-fitness-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1693683153580",
      product: "FAMILY SETUP",
      discribe: "Get 3 months free when you buy an Apple Watch.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-music-202309?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1693674567790",
      product: "FITNESS+",
      discribe: "Over 100 million songs. 1 month on us.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-airpods-202209?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1661626394670",
      product: "AIRPODS",
      discribe: "Magically connect to your Apple Watch.  ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-family-202109?wid=960&hei=1000&fmt=png-alpha&.v=1631292096000",
      product: "FAMILY SETUP",
      discribe: "One iPhone. An Apple Watch for everyone.",
      price: "",
      type: 2,
    },
  ];
  const setUp = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-setup-202309_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1693630854807",
      product: "GETTING STARTED",
      discribe: "Learn how to set up your new Apple Watch.  ",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-specialist-help-202306?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1687822839792",
      product: "New",
      discribe: " Shop with a Specialist ",
      price: "",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-specialist-help-202308?wid=960&hei=1000&fmt=png-alpha&.v=1690915306576",
      product: "WATCH AND LEARN",
      discribe: "How AppleCare+ protects your watch.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-shop0-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1695232630251",
      product: "APPLE WATCH SPECIALIST",
      discribe: "Shop one on one with a Specialist. Online or in a store.",
      price: "",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-50-onlinepersonalsession-202109?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1629957418000",
      product: "AIRPODS",
      discribe:
        "Get to know your new Apple Watch. From the basics to top tips. ",
      price: "",
      type: 2,
    },
  ];
  const dataSell = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5F3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692936755562",
      title: " New",
      discribe: "45mm Light Pink Sport Loop",
      price: "$49.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3Y3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692936544687",
      title: " New",
      discribe: "45mm Mulberry Sport Band - M/L",
      price: "$49.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5T3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692899410729",
      title: "New",
      discribe: "49mm Olive Alpine Loop - Medium",
      price: "$49.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTL63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693086527187",
      title: "New",
      discribe: "45mm Sequoia/Orange Nike Sport Loop",
      price: "$549.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJE3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692936539992",
      title: "New",
      discribe: "45mm Taupe Magnetic Link - M/L",
      price: "$99.00",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJJ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693087385682",
      title: "New",
      discribe: "Apple Watch Hermès - 45mm Gold/Ecru Toile H Single Tour",
      price: "$349.99",
      type: 2,
    },
  ];
  const newData = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-business-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693709650051",
      product: "BUSINESS",
      discribe: "From enterprise to small business, we’ll work with you.",
      price: "Great",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-government-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693363284746",
      product: "GOVERNMENT",
      discribe:
        "Special pricing is available for state, local, and federal agencies.",
      price: "",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692805927436",
      product: "VETERANS AND MILITARY",
      discribe:
        "Active and veteran members may be eligible for exclusive savings.1",
      price: "",
      type: 2,
    },
  ];
  return (
    <div className="bg-slate-50">
      <ShopTittle data={data} title={"Shop Apple Watch "} />
      <Card
        data={dataAppleWatch}
        type={0}
        title={"All models."}
        titleTwo={" Take your pick."}
      />
      <CardShapeSquare
        data={Ways}
        title={"Ways to save."}
        titleTwo={" Find what works for you."}
      />
      <Card
        type={0}
        data={Planet}
        title={"Planet-friendly pairings."}
        titleTwo={"Shop featured carbon neutral combinations."}
      />
      <CardShapeSquare
        data={setUp}
        title={"Setup and support."}
        titleTwo={" Our Specialists are here to help."}
      />
      <ShapeSquare
        data={dataSell}
        titleOne={"Apple Watch bands. "}
        titleTwo={"Complete the look."}
      />
      <CardShapeSquare
        data={TheWatch}
        title={"The iPad experience."}
        titleTwo={"Designed to connect with everything Apple."}
      />
      <MediumCard
        data={newData}
        titleTwo={"Exclusive savings for businesses, school, and more."}
        titleOne={"Special stores."}
      />
    </div>
  );
};
export default memo(shopWatch);
