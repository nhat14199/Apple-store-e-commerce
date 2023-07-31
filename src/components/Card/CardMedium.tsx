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

export const CardMedium: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="pt-10">
      <div className="text-left pl-[320px] flex">
        <h1 className="text-3xl font-semibold pr-2">The latest.</h1>{" "}
        <h1 className="text-3xl font-semibold text-slate-500">
          {" "}
          Take a look at what’s new, right now.
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
                className={`translate-x-[320px] hover:scale-[1.01] mr-[20px] w-[400px] hover:bg-opacity-90  relative shadow-md rounded-2xl border border-gray-300  hover:shadow-xl duration-500 ${
                  e.type == 2 ? "text-gray-950" : "text-white"
                } `}
              >
                <img
                  key={index}
                  className="rounded-2xl w-[400px]"
                  src={e.image}
                  alt=""
                />
                <div className="absolute  top-4 left-10 flex flex-col text-left max-w-[300px]">
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
export default CardMedium;

/*
max-width xác định giá trị tối đa của chiều rộng mà một phần tử có thể mở rộng.
 Nếu chiều rộng thực tế của phần tử vượt quá giá trị max-width, nó sẽ bị co lại để vừa với giá trị max-width. 
 Điều này hữu ích khi bạn muốn ngăn chặn phần tử tràn ra ngoài không gian bên ngoài của container hoặc giới hạn kích thước của phần tử trong các trường hợp nhất định.
 min-width xác định giá trị tối thiểu của chiều rộng mà một phần tử phải có. Nếu chiều rộng thực tế của phần tử nhỏ hơn giá trị min-width, nó sẽ được mở rộng để đạt đến 
 giá trị min-width. Điều này hữu ích khi bạn muốn đảm bảo phần tử có ít nhất một kích thước tối thiểu.
*/
