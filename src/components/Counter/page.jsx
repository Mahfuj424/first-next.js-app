/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter]=useState(0)
    return (
        <div>
            <div className='flex gap-5'>
        <button
          className="px-3 py-2 bg-white text-black rounded-md"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <h1>Counter: {counter}</h1>
        <button
          className="px-3 py-2 bg-white text-black rounded-md"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
        </div>
    );
};

export default Counter;