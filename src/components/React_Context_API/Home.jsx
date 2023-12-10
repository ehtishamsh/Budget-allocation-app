import React, { useContext } from "react";
import { AppContext } from "../../App";
function Home() {
  const { userName } = useContext(AppContext);
  return (
    <h1 className="text-3xl w-full text-center font-bold">
      This is the username {userName}
    </h1>
  );
}

export default Home;
