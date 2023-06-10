import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { VscChromeClose } from "react-icons/vsc";
import { useAddTaskMutation } from "../redux/slices/apiSlice";

export default function Modal({ view, setModal }) {
  const [addTask] = useAddTaskMutation();
  const [selectedOption, setSelectedOption] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  if (!view) {
    return null;
  }
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };
  const options = [
    { value: true, label: "Completed" },
    { value: false, label: "Incomplete" },
  ];
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const createTask = (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
      isCompleted: selectedOption,
    }).then((res) => {
      if (res.data.success) {
        toast.success("Task added successfully", { duration: 2500 });
        setTimeout(() => {
          setModal((m) => !m);
        }, 1000);
      }
    });
  };
  return (
    <>
      <Toaster />
      <div
        id="container"
        className="backdrop-blur-lg fixed inset-0 flex justify-center z-20 py-10 bg-white shad"
        onClick={closeModal}
      >
        <div className="max-w-2xl rounded-xl p-10 relative shad h-max">
          <h1 className="text-2xl font-bold mb-10">Create a new Task</h1>
          <button
            className=" text-red-500 absolute top-2 right-2 bg-red-200 p-2 rounded-full hover:bg-red-300"
            onClick={() => setModal((m) => !m)}
          >
            <VscChromeClose className="text-xl" />
          </button>
          <div>
            <form>
              <input
                type="text"
                placeholder="Title"
                className="p-2 bg-slate-200 w-96"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="p-2 bg-slate-200 my-5 w-96"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <div>
                <h4 className="text-lg font-bold mb-2">Status</h4>
                <select
                  value={selectedOption ? selectedOption : "Select an option"}
                  onChange={handleChange}
                  className="px-20 py-2 border border-gray-400 rounded"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="bg-blue-500 px-10 text-white p-2 w-96 rounded my-10"
                type="submit"
                onClick={createTask}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
