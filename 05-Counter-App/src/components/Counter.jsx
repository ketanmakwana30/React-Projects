import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  function reset() {
    setNum(0);
  }

  return (
    <div className="text-white flex items-center select-none justify-center h-screen w-screen">
      <div className="flex rounded-2xl flex-col justify-evenly items-center h-100 w-200  bg-gray-50/10">
        <h2 className="text-3xl font-bold">Counter App</h2>
        <h1 className="font-bold text-6xl">{num}</h1>

        <div className="flex gap-20">
          <button
            onClick={inc}
            className="rounded-sm py-0.5 px-2 text-0.2lg w-30 h-10 bg-green-400/90 text-black font-bold cursor-pointer "
          >
            Increase
          </button>
          <button
            onClick={dec}
            className="rounded-sm py-0.5 px-2 text-0.2lg w-30 h-10 bg-red-400/90 text-black font-bold cursor-pointer "
          >
            Decrease
          </button>
          <button
            onClick={reset}
            className="rounded-sm py-0.5 px-2 text-0.2lg w-30 h-10 bg-yellow-400/90 text-black font-bold cursor-pointer "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
