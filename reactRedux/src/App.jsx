import { useState } from "react";

import "./App.css";
import Addtodo from "./componets/Addtodo";
import Todos from "./componets/Todos";

function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen flex-col gap-5">
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
