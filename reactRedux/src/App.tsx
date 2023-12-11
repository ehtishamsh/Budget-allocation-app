import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  // const number: number = 123;
  // let newNumber: number = 12 + number;
  // let fontsize: string | number;
  // fontsize = 12;
  // fontsize = "12px";

  // let arr = ["Ehtisham", "Ali", "Candia"];
  // arr.push("Abdullah");
  // let arrWithType: string[];
  // arrWithType = ["Ehtisham", "Ehtisham", "Candia"];
  // console.log(arrWithType);
  // const obj = {
  //   name: "Ehtisham",
  //   id: 2,
  //   title: true,
  // };
  // console.log(obj.name);
  // const addnum = (num1: number, num2: number, num3?: number): number => {
  //   return num1 + num2;
  // };
  // console.log(addnum(1, 4, 2));
  type userType = {
    userName: string;
    id: number;
    yes: boolean;
  };
  const app = (user: userType) => {
    console.log(user);
  };
  const data = {
    userName: "Ehtisham",
    id: 3,
    yes: true,
  };
  app(data);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
