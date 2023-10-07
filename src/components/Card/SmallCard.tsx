import React from "react";

interface MyComponentProps {
  data: any;
}

/*
 Nếu là js thì 
  MyComponent.propTypes = {
  name: PropTypes.string.isRequired, // Yêu cầu name là một chuỗi
};
*/

export const SmallCard: React.FC<MyComponentProps> = (props: any) => {
  console.log("propsprops", props);

  return (
    <div className="pt-10 bg-gray-50">
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">
          {" "}
          The Apple Store difference.{" "}
        </h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500">
          {" "}
          Even more reasons to shop with us.
        </h1>
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
            width: `${props.data?.length * 400}px`,
          }}
        >
          {props.data.map((e: any, index: number) => (
            <div
              className="pt-2 "
              key={index}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <div
                className={`px-10 py-8 translate-x-[320px] hover:scale-[1.01] mr-[20px] w-[320px] h-56 hover:bg-opacity-90  relative shadow-md rounded-2xl border border-gray-300  hover:shadow-xl duration-500 ${
                  e.type == 2 ? "text-gray-950" : "text-black"
                } `}
              >
                <div className="rf-ccard-content-info">
                  <div className="">
                    <svg
                      height={56}
                      viewBox="0 0 49 56"
                      width={49}
                      aria-hidden="true"
                      role="img"
                    >
                      {e.icon}
                    </svg>
                  </div>
                  <div className="mb-6">
                    <p className="text-xl font-semibold text-start">
                      <span
                        className={`${
                          e.type === 1 ? "text-green-500" : "text-blue-500"
                        }`}
                      >
                        {e.titleOne}
                      </span>{" "}
                      {e.titleTwo}
                      <span
                        className={`${
                          e.type === 1
                            ? "text-green-500"
                            : e.type === 2
                            ? "text-blue-500"
                            : "text-purple-500"
                        }`}
                      >
                        {e.titleThree}
                      </span>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SmallCard;
