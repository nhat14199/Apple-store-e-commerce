import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";

const ProductList = () => {
  const [img, setImg] = useState<string>("");
  const data = [
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { img: "https://flowbite.com/docs/images/products/apple-watch.png" },
  ];

  return (
    <div className="my-10 grid grid-cols-4 gap-3">
      {" "}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default ProductList;
