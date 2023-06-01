import React from "react";

export const TopBar = () => {
  return (
    <div className="w-full h-auto bg-blue-400 text-white font-extralight pb-2 pt-1">
      <div className="flex justify-around">
        <div className="flex ">
          <span className="px-1">Bài viết | </span>
          <span className="px-1"> Google Play |</span>
          <span className="px-1">App Store |</span>
          <span className="px-1">Kết nối </span>
        </div>
        <div />
        <div className="flex">
          <span className="px-1">Thông báo |</span>
          <span className="px-1">Trợ giúp</span>
        </div>
      </div>
      <div className=" flex justify-around py-2">
        <div className="grid grid-cols-12 gap-3 ">
          <div className=" col-span-1">
            <img
              src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
              alt=""
              width={45}
            />
          </div>
          <div className="col-span-2">
            <input
              className="h-6 xl:h-8 text-black w-full border-2 text-sm sm:text-base border-white px-2 sm:px-5 rounded-sm focus:outline-none"
              placeholder="Khu vực"
              autoComplete="off"
            />
          </div>
          <div className="flex col-span-6">
            <input
              className="h-6 xl:h-8 text-black w-full border-2 text-sm sm:text-base border-white px-2 sm:px-5 rounded-sm focus:outline-none"
              placeholder="Rẽ mỗi ngày không chỉ một ngày ..."
              autoComplete="off"
            />
            {/* <button className="w-10">Tìm </button> */}
          </div>
          <div className="flex col-span-3 pl-4">
            {" "}
            <div className="px-8">User </div>
            <div>|</div>
            <div className="px-8">Giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
      </div>
    </div>
  );
};
export default TopBar;
