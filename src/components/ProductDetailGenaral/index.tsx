import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "../../constant/baseUrl";

export const ProductDetailGenaral = () => {
  const { id }: any = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [phonesData, setPhonesData] = useState<any>([]);
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
      const resp = await axios.get(`${base_url}phones/${id}`);
      setPhonesData(resp.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getProductsDetail();
  }, []);

  return (
    <div className="pt-20">
      <div className="text-start max-w-7xl px-4 mx-auto text-4xl font-medium">
        Buy {phonesData.name}
        <div className="text-xs font-light mt-1">
          {" "}
          From $699 or $29.12/mo.per month for 24 mo.monthsFootnote*
        </div>
      </div>
      <section className="py-20 font-poppins dark:bg-gray-800">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-2/3 md:mb-0">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 ">
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </a>
                  <img
                    className="object-cover w-96 mx-auto h-96 z-0 overflow-hidden"
                    src={phonesData?.image}
                  />
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                  <div className="flex items-center justify-center mt-6">
                    <span className="mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                        Have question about buying an Iphone
                      </h2>
                      <a
                        className="text-xs text-blue-400 lg:text-sm dark:text-blue-200"
                        href="#"
                      >
                        Chat with an Iphone specialist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="lg:pl-20 ">
                <div className="mb-6 text-start">
                  <span className="text-red-500 dark:text-red-200">New</span>
                  <h2 className="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-2xl font-heading dark:text-gray-300">
                    Model. Which is best for you?
                  </h2>
                  {phonesData.brand1?.map((e: any, i: number) => (
                    <div
                      className={`mt-4  w-full p-4 rounded-lg border-[2px] hover:border-blue-600  flex justify-around cursor-pointer ${
                        isActive === i ? "border-blue-600 " : ""
                      }`}
                      onClick={() => {
                        handleClick(i);
                        setPrice1(+e.price.replace("$", ""));
                      }}
                    >
                      <div className="w-1/2">
                        {e.name}
                        <div className="text-xs">6.1 inch display</div>{" "}
                      </div>{" "}
                      <span className="w-1/2 text-xs text-end"> {e.price}</span>
                    </div>
                  ))}

                </div>
                <div>
                  <div className="text-lg font-medium text-left  mb-2 mt-40">
                    <span className="font-medium"> Finish.</span>{" "}
                    <span>Pick your favorite.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-6 lg:gap-2 dark:border-gray-600">
                    <span
                      className={`"w-10 h-10  cursor-pointer  ${
                        isColor === 1
                          ? "border-blue-600 border-[4px] p-1 rounded-3xl pb-2   "
                          : ""
                      } p-[5px] "`}
                      onClick={() => handleChooseColor(1)}
                    >
                      <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-pink-202309?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692831506843"
                        alt=""
                      />
                    </span>
                    <span
                      className={`"w-10 h-10 rounded-3xl border-[3px]  cursor-pointer  ${
                        isColor === 2
                          ? "border-blue-600 border-[4px] p-1 rounded-3xl pb-2   "
                          : ""
                      } p-[5px]"`}
                      onClick={() => handleChooseColor(2)}
                    >
                      <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-blue-202309?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692831507035"
                        alt=""
                      />
                    </span>
                    <span
                      className={`"w-10 h-10 rounded-3xl border-[3px]  cursor-pointer  ${
                        isColor === 3
                          ? "border-blue-600 border-[4px] p-1 rounded-3xl pb-2   "
                          : ""
                      } p-[5px] "`}
                      onClick={() => handleChooseColor(3)}
                    >
                      <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-black-202309?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692831506982"
                        alt=""
                      />
                    </span>
                    <span
                      className={`"w-10 h-10 rounded-3xl border-[3px]  cursor-pointer  ${
                        isColor === 4
                          ? "border-blue-600 border-[4px] p-1 rounded-3xl pb-2   "
                          : ""
                      } p-[5px] "`}
                      onClick={() => handleChooseColor(4)}
                    >
                      <img
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-pink-202309?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692831506843"
                        alt=""
                      />
                    </span>
                  </div>
                </div>

                <div className="mb-6 text-start mt-40">
                  <h2 className="mb-2 text-lg font-semibold dark:text-gray-400">
                    Storage. How much space do you need?
                  </h2>
                  {phonesData?.storage?.map((e: any, i: number) => (
                    <div
                      className={`mt-4  w-full p-4 rounded-lg border-[2px] hover:border-blue-600  flex justify-around cursor-pointer ${
                        storage === i ? "border-blue-600 " : ""
                      }`
                    
                    }
                      onClick={() => {
                        handleChooseStorage(i);
                        setPrice2(+e.price);
                      }}
                    >
                      <div className="w-1/2"> {e.limit}</div>{" "}
                      <span className="w-1/2 text-xs text-end">
                        {" "}
                        From ${e.price} or $33.29/mo.per month
                      </span>
                    </div>
                  ))}
                </div>

                <div className=" border-b-2 border-t-2 border-gray-200 text-left  py-4 mt-20 text-blue-800 text-xl font-semibold">
                  Total price : {price1 + price2} $
                </div>

                <div className="mt-20 ">
                  <a href={`/pay/${price1 + price2}`}>
                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                      Continue
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="mt-5 text-center text-4xl font-semibold  ">
          what's in the box
        </div>
        <div className="mt-5 max-w-5xl mx-auto flex justify-center mb-10 ">
          <div className="w-full overflow-hidden flex bg-gray-50">
            <div className="w-1/2 "></div>
            <div className="w-1/2  max-h-96 flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-witb-202209?wid=344&hei=784&fmt=jpeg&qlt=90&.v=1660679147124"
                alt=""
                height="392"
                width="172"
              />
            </div>
          </div>
          <div className="w-full overflow-hidden flex bg-gray-50">
            <div className="w-1/2  max-h-96 flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-cables-witb-202209?wid=184&hei=784&fmt=jpeg&qlt=90&.v=1660679135172"
                alt=""
                className=""
                height="392"
                width="92"
              />
            </div>
            <div className="w-1/2 "></div>
          </div>
        </div>
        <div className="mt-5 max-w-5xl mx-auto  justify-center mb-10 ">
          <div>Our environmental goals.</div>
          <div className="text-xs mt-2">
            As part of our efforts to reach carbon neutrality by 2030, iPhone 14
            and iPhone 14 Plus do not include a power adapter or EarPods.
            Included in the box is a USB‑C to Lightning Cable that supports fast
            charging and is compatible with USB‑C power adapters and computer
            ports.
          </div>

          <div className="text-xs mt-2">
            {" "}
            We encourage you to re‑use your current USB‑A to Lightning cables,
            power adapters, and headphones, which are compatible with these
            iPhone models. But if you need any new Apple power adapters or
            headphones, they are available for purchase.
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ProductDetailGenaral);
