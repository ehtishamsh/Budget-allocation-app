import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="h-screen w-full flex justify-start items-center">
      <div className="flex flex-col w-full h-full gap-6 items-center justify-center">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="py-2 px-4 bg-indigo-800 text-slate-200"
        >
          +
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="py-2 px-4 bg-red-800 text-slate-200"
        >
          -
        </button>
        <p className="font-bold text-3xl text-slate-800">{counter}</p>
      </div>
    </div>
  );
}

export default App;
