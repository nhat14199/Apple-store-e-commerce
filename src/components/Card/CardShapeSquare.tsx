import React from "react";
interface MyComponentProps {
  data: any;
  title: string;
  titleTwo: string;
}

export const CardShapeSquare: React.FC<MyComponentProps> = (props: any) => {
  const { data, title, titleTwo } = props;

  return (
    <div className="mt-5">
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">{title}</h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500"> {titleTwo}</h1>
      </div>
      <div
        className="overflow-x-scroll py-6 scrollbar-hide"
        style={{
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
        }}
      >
        <div
          className="flex flex-row flex-nowrap "
          style={{
            width: `${data.length * 480}px`,
          }}
        >
          {data.map((e: any, index: number) => (
            <div
              className="pt-2 "
              key={index}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <div
                className={`translate-x-[320px] hover:scale-[1.01] mr-[20px] w-[480px]  hover:bg-opacity-90  relative shadow-md rounded-2xl border border-gray-300  hover:shadow-xl duration-500 ${
                  e.type == 2 ? "text-gray-950" : "text-white"
                } `}
              >
                <img
                  key={index}
                  className="rounded-2xl w-[480px] "
                  src={e.image}
                  alt=""
                />
                <div className="absolute  top-4 left-10 flex flex-col text-left max-w-[400px]">
                  <h1 className="text-xs font-normal py-1">{e.product}</h1>
                  <h1 className="text-xl font-normal">{e.discribe}</h1>
                  <h1 className="text-sm font-light py-1">{e.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardShapeSquare;
