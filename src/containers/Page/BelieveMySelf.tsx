import React, { useCallback, useState } from "react";

export default function BelieveMySelf() {
  const [count, setCount] = useState(0);

  // Sử dụng useCallback để tối ưu hiệu suất của handleIncrement
  const handleIncrement = useCallback(() => {
    console.log("my component has reRender ");
    setCount((prevCount) => prevCount + 1);
  }, []); // Không có dependencies, hàm này chỉ được tạo lại một lần khi component render lần đầu tiên.

  return (
    <div>
      <p>Count: {count}</p>
      do
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
