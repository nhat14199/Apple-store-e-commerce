import React, { useEffect, useState } from "react";
function Carousel() {
  const [index, setIndex] = useState(1);
  const length = 5;

  const handelPrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handelNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  useEffect(() => {
    setTimeout(handelNext, 3000);
  }, []);
  return (
    <div className=" ">
      <button className="mr-2" onClick={handelPrevious}>
        Previous
      </button>
      <button onClick={handelNext}>next</button>
      <p>{index}</p>
    </div>
  );
}

export default Carousel;
