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
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    },
    {
      logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
    },
  ];
  return (
    <div className="mt-10 pb-4">
      <h1 className="text-2xl font-light text-left flex ">
        <h1 className="mr-2 font-semibold text-gray-800">Store. </h1>{" "}
        <h1 className="text-stone-500 font-medium">
          The best way to buy the products you love.
        </h1>
      </h1>
      <div className="mt-1 flex justify-around pt-4">
        {data.map((e, index: number) => (
          <img src={e.logo} alt="" key={index} className="w-18 h-16 mt-4 " />
        ))}
      </div>
    </div>
  );
};
export default BrandsList;
