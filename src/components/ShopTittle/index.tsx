import React, { memo } from "react";

interface ComponentProps {
  data: any;
  title: string;
}
export const ShopTittle: React.FC<ComponentProps> = (props: any) => {
  const { data, title } = props;
  return (
    <div className="pt-14 pb-4 mx-80 ">
      <div className="flex justify-between w-full">
        {" "}
        <div className="text-4xl font-light text-left flex w-1/2  ">
          <div className="mr-2 font-semibold text-gray-800 flex">{title}</div>{" "}
        </div>
        <div className="w-1/5 p-2 flex justify-around ">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853"
            alt=""
            className="w-10 h-10 border rounded-3xl "
          />
          <div className="text-start text-xs  ">
            <div>Need shopping help?</div>
            <a href="" className="text-blue-400">
              Ask a Specialist
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between pt-5">
        {data.map((e: any, i: number) => (
          <span>{e.title}</span>
        ))}
      </div>
    </div>
  );
};
export default memo(ShopTittle);
