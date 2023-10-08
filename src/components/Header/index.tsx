import React, { memo } from "react";
import {
  AiFillApple,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

export const Header = () => {
  return (
    <div className="w-full h-auto bg-slate-100 text-gray-800 font-light pb-2 pt-1 hover:text-gray-900 cursor-pointer">
      <div className=" pt-4 pb-2 flex justify-around ">
        <div className="grid grid-cols-12 gap-10 sm:flex ">
          <span className="col-span-1 text-xl mb-2  ">
            <AiFillApple className=" " />
          </span>
          <span className="col-span-1 text-sm">Store</span>
          <span className="col-span-1 text-sm">Mac</span>
          <span className="col-span-1 text-sm">Ipad</span>
          <span className="col-span-1 text-sm">Iphone</span>
          <span className="col-span-1 text-sm">Watch</span>
          <span className="col-span-1 text-sm">AirPods</span>
          <span className="col-span-1 text-sm">TV & Home</span>
          <span className="col-span-1 text-sm">Entertainment</span>
          <span className="col-span-1 text-sm">Accessories</span>

          <span className="col-span-1 text-sm">
            <AiOutlineShoppingCart className="ml-4 mt-[0.5] text-xl" />
          </span>
          <span className="col-span-1 text-sm">
            <AiOutlineUserAdd className="  mt-[0.5] text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);
