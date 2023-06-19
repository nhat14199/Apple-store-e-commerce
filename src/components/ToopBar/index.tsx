import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import {
  AiFillApple,
  AiFillFacebook,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

export const TopBar = () => {
  return (
    <div className="w-full h-auto bg-slate-100 text-gray-800 font-light pb-2 pt-1 hover:text-gray-900 cursor-pointer">
      {/* <div className="flex justify-around">
        <div className="flex ">
          <span className="px-1">Bài viết | </span>
          <span className="px-1 flex ">
            <FaGooglePlay className="mt-1 mr-1" /> Google Play |
          </span>
          <span className="px-1 flex">
            {" "}
            <FaAppStoreIos className="mt-1 mr-1" /> App Store |
          </span>
          <span className="px-1 flex ">
            {" "}
            <AiFillFacebook className="mt-1 mr-1" /> Kết nối{" "}
          </span>
        </div>
        <div />
        <div className="flex ">
          <span className="px-1">Thông báo |</span>
          <span className="px-1">Trợ giúp</span>
        </div>
      </div> */}
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

          {/* <div className="col-span-1">
            <img
              src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
              alt=""
              width={45}
            />
          </div>
          <div className="flex col-span-3 pl-4">
            {" "}
            <div className="px-8 flex">
              User <AiOutlineUserAdd className="ml-1 mt-1" />
            </div>
            <div>|</div>
            <div className="px-8 flex ">
              Giỏ hàng <AiOutlineShoppingCart className="ml-1 mt-1" />
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="flex justify-center">
        {" "}
        <div className="hidden mt-1 sm:flex w-max-content">
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Bếp
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Dịch Vụ
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            GAS
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Máy hút bụi
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Phụ kiện gas
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Sản phẩm gia dụng
          </a>
          <a href="" className="hover:underline text-sm mr-6 my-1 flex ">
            Thực phẩm
          </a>
        </div>
      </div> */}
    </div>
  );
};
export default TopBar;
