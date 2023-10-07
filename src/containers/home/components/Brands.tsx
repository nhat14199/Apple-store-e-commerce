const BrandsList = () => {
  const data = [
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1661027785546",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202303?wid=400&hei=260&fmt=png-alpha&.v=1677701613598",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202303?wid=400&hei=260&fmt=png-alpha&.v=1677172796005",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692803114952",
    },
  ];
  return (
    <div className="mt-10 pb-4 mx-80">
      <div className="flex justify-between w-full">
        {" "}
        <div className="text-4xl font-light text-left flex w-1/2  ">
          <div className="mr-2 font-semibold text-gray-800 flex">
            Store. The best way to buy the products you love.
          </div>{" "}
        </div>
        <div className="w-1/5 p-2 flex justify-around">
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
      <div className="mt-6 flex justify-between">
        {data.map((e, index: number) => (
          <img
            src={e.logo}
            alt=""
            key={index}
            className="w-28 h-16 mt-4 mx-2"
          />
        ))}
      </div>
    </div>
  );
};
export default BrandsList;
