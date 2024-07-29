import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "../../constant/baseUrl";

interface props {}

export const ProductDetail = () => {
  const { id }: any = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [macsData, setMacsData] = useState<any>([]);
  const [isActive, setIsActive] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [isColor, setIsColor] = useState<number>(0);
  const [price1, setPrice1] = useState<number>(0);
  const [price2, setPrice2] = useState<number>(0);
  const handleClick = (index: number) => {
    setIsActive(index);
  };

  const handleChooseStorage = (index: number) => {
    setStorage(index);
  };
  const handleChooseColor = (index: number) => {
    setIsColor(index);
  };

  const getProductsDetail = async () => {
    setisLoading(true);
    try {
      setisLoading(true);
      const resp = await axios.get(`${base_url}macs/${id}`);
      setMacsData(resp.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  console.log("price1", price1);
  console.log("price2", price2);
  console.log("macsData", macsData);

  useEffect(() => {
    getProductsDetail();
  }, []);

  return (
    <div className="pt-20">
      <div className="w-full py-5">
        <div className="mx-80  text-left">
          <div className="text-red-600 text-lg">New</div>
          <div className="text-4xl font-semibold"> Buy MacBook Air </div>
          <div className="mt-2 font-normal">From 999 or 41 . for 24 mo</div>
        </div>
        <div className="mt-10 mx-80  flex ">
          <div className="w-1/2 ">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-config-202306?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1684340991333"
              alt=""
              className="w-[410px] h-60 "
            />

            <div className="mt-5">
              <a className="text-blue-600 pr-32" href="">
                View gallery
              </a>
            </div>
            <div className="mt-10 flex justify-around  w-[410px]">
              <div className=" w-1/2 ">
                <div className="flex justify-center items-center">
                  <svg width="35px" height="35px" className="">
                    <path fill="none" d="M0 0h35v35H0z" />
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z" />
                  </svg>
                </div>
                <div className="text-center text-xs">
                  Get free delivery, or pick up available items at an Apple
                  Store
                </div>
              </div>
              <div className=" w-1/2 ">
                <div className="flex justify-center items-center">
                  <svg viewBox="0 0 35 35" width="35px" height="35px">
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path
                      d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z"
                      fill="none"
                    ></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z"></path>
                  </svg>
                </div>
                <div className="text-center text-xs">Free and easy returns</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 text-left ">
            <div className="text-2xl font-semibold ">
              Customize your {macsData.name}
            </div>
            <p className="text-sm font-normal py-1 pt-2">
              Apple M2 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine
            </p>
            <p className="text-sm font-normal py-1">8GB unified memory</p>
            <p className="text-sm font-normal py-1">256GB SSD storage</p>
            <p className="text-sm font-normal py-1">1080p FaceTime HD camera</p>
            <p className="text-sm font-normal py-1">
              Two Thunderbolt / USB 4 ports
            </p>
            <p className="text-sm font-normal py-1">
              35W Dual USB-C Port Compact Power Adapter
            </p>
            <p className="text-sm font-normal py-1">
              Backlit Magic Keyboard with Touch ID - US English
            </p>
            <div className="h-[1px] bg-slate-400 w-full mt-10" />
            <p className="text-sm font-semibold mt-4"> Apple Trade In </p>
            <p className="text-sm font-normal py-1">
              Get credit toward a new Mac when you trade in your eligible
              computer. Or recycle it for free.Footnote◊◊
            </p>
            <div className="h-[1px] bg-slate-400 w-full mt-4" />
            <div className="text-lg font-semibold mt-5">Memory</div>
            <div className="text-base font-normal mt-1">
              <a href="" className="text-blue-500">
                How much memory is right for you ?
              </a>
              {macsData.memory?.map((e: any, i: number) => (
                <div
                  className={` border-[2px] cursor-pointer hover:border-blue-500 py-8 px-3 text-lg font-medium rounded-lg mt-4 ${
                    isActive === i ? "border-blue-600 " : ""
                  }`}
                  onClick={() => {
                    handleClick(i);
                    setPrice1(+e.price);
                  }}
                >
                  {e.quantity}
                </div>
              ))}
            </div>
            <div className="text-lg font-semibold mt-5">Storage</div>
            <div className="text-base font-normal mt-1">
              <a href="" className="text-blue-500">
                How much storage is right for you ?
              </a>
              {macsData.storage?.map((e: any, i: number) => (
                <div
                  className={` border-[2px] cursor-pointer hover:border-blue-600  py-8 px-3 text-lg font-medium rounded-lg mt-4 ${
                    storage === i ? "border-blue-600 " : ""
                  }`}
                  onClick={() => {
                    handleChooseStorage(i);
                    setPrice2(+e.price);
                  }}
                >
                  {e.quantity} SSD storage
                </div>
              ))}
            </div>
            <div className="text-lg font-semibold mt-5">Keyboard Language </div>
            <div className="text-base font-normal mt-1">
              <a href="" className="text-blue-500">
                Which power adapter is right for you ?
              </a>
              <div className=" border-[2px] cursor-pointer border-blue-500 py-8 px-3 text-lg font-medium rounded-lg mt-4">
                35W Dual USB-C Port Compact Power Adapter
              </div>
              <div className=" border-[1px] cursor-pointer border-gray-500 py-8 px-3 text-lg font-medium rounded-lg mt-4">
                70W USB-C Power Adapter
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-36 bg-gray-50 fixed bottom-0 border-t border-gray-400  ">
        <div className="flex mx-80">
          {" "}
          <div className="w-1/3 pt-8 flex ">
            <svg
              viewBox="0 0 25 25"
              className="as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced"
              role="img"
              aria-hidden="true"
              width="25px"
              height="25px"
            >
              <path fill="none" d="M0 0h25v25H0z"></path>
              <path
                fill="#1d1d1f"
                d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"
              ></path>
            </svg>
            <div>
              <div className="ml-2 text-start  text-sm font-medium pt-1 ">
                Ship
              </div>
              <div className="ml-2 text-sm font-normal pt-[2px]">
                1–3 business days
              </div>

              <div className="text-start ml-2 text-sm font-normal pt-[2px]">
                Free Shipping
              </div>
              <div className="ml-2 text-sm font-normal pt-[2px]">
                {" "}
                <a href="" className="text-blue-500">
                  Get delivery dates
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3 pt-8 flex ">
            <svg
              viewBox="0 0 25 25"
              className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced"
              role="img"
              aria-hidden="true"
              width="25px"
              height="25px"
            >
              <path fill="none" d="M0 0h25v25H0z"></path>
              <path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path>
              <path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path>
            </svg>
            <div>
              <div className="ml-2 text-start  text-sm font-medium pt-1 ">
                Pickup
              </div>
              <div className="ml-2 text-sm font-normal pt-[2px]">
                {" "}
                <a href="" className="text-blue-500">
                  Check availability
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 pt-8 flex ">
            <div className="w-2/3">
              <div className="text-xl text-left px-4 text-red-500 font-normal">
                {" "}
                $ {price1 + price2} or $108.25/mo.per month for 12
                mo.monthsFootnote*
              </div>
              <div className="ml-2 text-sm font-normal pt-[2px] text-start">
                {" "}
                <a href="" className="text-blue-500">
                  Check availability
                </a>
              </div>
            </div>
            <div className="w-1/3">
              <a href={`/pay/${price1 + price2}`}>
                <button className="bg-blue-600 px-6 py-2 text-white rounded-md hover:bg-blue-500">
                  Continue
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
