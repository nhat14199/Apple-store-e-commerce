import React from "react";

function CardMedium() {
  const data = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677311465897",
      product: "IPhone 14 Pro",
      discribe: "Pro. Beyond.",
      price:
        "From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote ",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182",
      product: "MACBOOK AIR 15”",
      discribe: "Impressively big. Impossibly thin.",
      price:
        "From $999 or $41.62/mo.per month for 24 mo.months before trade‑inFootnote ",
      type: 2,
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1685655505966",
      product: "LIMITED TIME OFFER”",
      discribe: "Save on Mac or iPad for college.",
      price:
        "Save on Mac or iPad with education pricing. Plus get a gift card up to $150,footnote1 20% off AppleCare+,2 and more.",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374",
      product: "iPad Air”",
      discribe: "Light. Bright. Full of might.",
      price: "From $599 or $49.91/mo.per month for 12 mo.monthsFootnote* ",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1660686053448",
      product: "APPLE WATCH ULTRA”",
      discribe: "Adventure awaits.",
      price: "From $799 or $33.29/mo.per month for 24 mo.monthsFootnote†",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-se-pride-202305?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1682613104261",
      product: "PRIDE EDITION SPORT BAND",
      discribe: "Pride is in the air..",
      price: "From $49 or",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677558944069",
      product: "IPHONE 14",
      discribe: "Wonderfull.",
      price:
        "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
      type: 2,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677224522003",
      product: "APPLE WATCH SERIES 8",
      discribe: "A healthy leap ahead.",
      price: "From $399 or $16.62/mo.per month for 24 mo.monthsFootnote†",
      type: 1,
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1667423474414",
      product: "IPAD PRO",
      discribe: "Supercharged by M2.",
      price: "From $799 or $66.58/mo.per month for 12 mo.monthsFootnote†",
      type: 1,
    },
  ];

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
          className="flex flex-row flex-nowrap "
          style={{
            width: `${data.length * 400}px`,
          }}
        >
          {data.map((e, index) => (
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
}
export default CardMedium;

/*
max-width xác định giá trị tối đa của chiều rộng mà một phần tử có thể mở rộng.
 Nếu chiều rộng thực tế của phần tử vượt quá giá trị max-width, nó sẽ bị co lại để vừa với giá trị max-width. 
 Điều này hữu ích khi bạn muốn ngăn chặn phần tử tràn ra ngoài không gian bên ngoài của container hoặc giới hạn kích thước của phần tử trong các trường hợp nhất định.
 min-width xác định giá trị tối thiểu của chiều rộng mà một phần tử phải có. Nếu chiều rộng thực tế của phần tử nhỏ hơn giá trị min-width, nó sẽ được mở rộng để đạt đến 
 giá trị min-width. Điều này hữu ích khi bạn muốn đảm bảo phần tử có ít nhất một kích thước tối thiểu.
*/
