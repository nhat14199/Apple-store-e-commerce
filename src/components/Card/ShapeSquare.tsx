import React, { memo } from "react";

interface ComponentProps {
  data: any;
  titleOne: string;
  titleTwo: string;
}

export const ShapeSquare: React.FC<ComponentProps> = (props: any) => {
  const { data, titleOne, titleTwo } = props;
  return (
    <div className="pt-10">
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">{titleOne}</h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500">{titleTwo}</h1>
      </div>
      <div
        className="overflow-x-scroll scrollbar-hide py-6"
        style={{
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
        }}
      >
        <div
          className="flex flex-row flex-nowrap"
          style={{
            width: `${data?.length * 340}px`,
          }}
        >
          {data.map((e: any, index: number) => (
            <div
              className="pt-2 w-full h-full"
              key={index}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <div
                className={`translate-x-[320px] hover:scale-[1.01] mr-[20px] w-[312px] h-[497px] hover:bg-opacity-90  relative shadow-md rounded-2xl border border-gray-300 bg-white  hover:shadow-xl duration-500 p-4 ${
                  e.type == 2 ? "text-gray-950" : "text-white"
                } `}
              >
                <div className=" h-2/3 flex justify-center items-center ">
                  {" "}
                  <img key={index} className="" src={e.image} alt="" />
                </div>
                <div className=" w-full h-1/3 text-start relative">
                  <ul className="py-2 text-center flex items-center absolute left-1/3 gap-2">
                    <li className="w-3 h-3 bg-gray-500 rounded-2xl "></li>
                    <li className="w-3 h-3 bg-blue-900 rounded-2xl "></li>{" "}
                    <li className="w-3 h-3 bg-purple-700 rounded-2xl "></li>{" "}
                    <li className="w-3 h-3 bg-orange-700 rounded-2xl "></li>
                  </ul>

                  <div className="text- text-red-500 pt-10">{e.title} </div>
                  <div className="text-base text-black mt-3 font-medium truncate">
                    {e.discribe}
                  </div>
                  <div className="text-sm mt-4">{e.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(ShapeSquare);

/*
justify-center: Điều này căn giữa nội dung theo chiều ngang.
items-center: Điều này căn giữa nội dung theo chiều dọc.


*/
