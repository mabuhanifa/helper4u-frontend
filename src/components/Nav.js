import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/slices/taskSlice";
export default function Nav() {
  const dispatch = useDispatch();
  return (
    <nav className="border rounded-lg p-2 shad">
      <div className="relative">
        <input
          type="text"
          className="bg-gray-200 rounded-md py-2 md:w-96 px-10"
          placeholder="Search"
          onChange={(e) => dispatch(addFilter(e.target.value))}
        />
        <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
      </div>
    </nav>
  );
}
