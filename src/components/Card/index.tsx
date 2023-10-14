import React, { memo } from "react";
import Rating from "../Rate";
interface MyComponentProps {
  data: any;
  title: string;
  titleTwo: string;
}
const Card: React.FC<MyComponentProps> = (props: any) => {
  const { data, title, titleTwo } = props;
  return (
    <div>
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">{title}</h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500"> {titleTwo}</h1>
      </div>
      <div
        className="overflow-x-scroll scrollbar-hide py-6"
        style={{
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
        }}
      >
        <div
          className="flex flex-row flex-nowrap "
          style={{
            width: `${data.length * 400}px`,
          }}
        >
          {data.map((e: any, index: number) => (
            <div
              key={index}
              className="flex flex-row flex-nowrap"
              style={{
                width: `${data.length * 400}px`,
              }}
            >
              <div className="translate-x-[320px] mr-[15px] w-[420px] h-[500px] bg-white border border-gray-300 shadow-xl hover:shadow-2xl overflow-hidden  hover:scale-[1.01] duration-500 flex flex-col rounded-2xl relative">
                <div className="h-1/5 flex flex-col text-left pl-14 pt-6">
                  <span className="text-orange-800 text-sm ">NEW</span>
                  <span
                    className="text-gray-900 text-2xl max-w-xs font-semibold "
                    key={index}
                  >
                    {e.name}
                  </span>
                </div>
                <img
                  className=" w-auto h-3/5 px-14 py-8"
                  src={e.image}
                  alt=""
                  key={index}
                />
                <div className="h-1/5 flex flex-row justify-around text-left px-8">
                  <span className="max-w-[250px] text-sm" key={index}>
                    {e.price}
                  </span>
                  <button className="bg-blue-500 w-14 h-8 p-1 text-white font-light text-center rounded-3xl cursor-pointer hover:bg-blue-600">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Card);
