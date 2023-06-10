import React from "react";
import { RiSearchLine } from "react-icons/ri";
export default function Nav() {
  return (
    <nav>
      <div className="relative">
        <input
          type="text"
          className="bg-gray-200 rounded-md py-2 md:w-96 px-10"
          placeholder="Search"
        />
        <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
      </div>
    </nav>
  );
}
