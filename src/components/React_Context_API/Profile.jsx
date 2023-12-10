import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { AppContext } from "../../App";

function Profile() {
  const { userName } = useContext(AppContext);
  return (
    <>
      <h1 className="text-3xl w-full text-center font-bold">
        THIS IS PROFILE OF : {userName}
      </h1>
      <ChangeProfile />
    </>
  );
}

export default Profile;
