import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="p-2 w-full bg-slate-100 border-slate-500 border-b-2 mb-5">
      <nav className="w-full flex justify-center items-center gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-indigo-500 font-semibold text-base text-slate-800"
              : "font-semibold text-base text-slate-800"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-indigo-500 font-semibold text-base text-slate-800"
              : "font-semibold text-base text-slate-800"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-indigo-500 font-semibold text-base text-slate-800"
              : "font-semibold text-base text-slate-800"
          }
        >
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
