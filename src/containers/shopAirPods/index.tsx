import React, { memo } from "react";

export const shopAirPods = () => {
  return (
    <div className="bg-white mt-10">
      <div className=" mx-14  bg-slate-300 rounded-xl shadow-lg">
        <img
          src="https://www.apple.com/v/airpods/u/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large_2x.jpg"
          alt=""
          className="w-auto "
        />
      </div>
    </div>
  );
};

export default memo(shopAirPods);
