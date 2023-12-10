import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

function ChangeProfile() {
  const { userName, setUserName } = useContext(AppContext);
  const [name, setName] = useState(userName);

  const handleclick = () => {
    setUserName(name);
  };
  return (
    <div className="w-full flex justify-center items-center gap-4 mt-5">
      <input
        type="text"
        className="p-3 bg-slate-200"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleclick}
        className="p-3 bg-indigo-600 text-slate-700"
      >
        Change
      </button>
    </div>
  );
}

export default ChangeProfile;
