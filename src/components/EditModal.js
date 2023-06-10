import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { VscChromeClose } from "react-icons/vsc";
import { useEditTaskMutation } from "../redux/slices/apiSlice";

export default function EditModal({ view, setEditModal, task }) {
  const [isTrue, setIsTrue] = useState(task.isCompleted === 1 ? true : false);
  const [editTask] = useEditTaskMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!view) {
    return null;
  }

  const closeModal = (e) => {
    if (e.target.id === "container") {
      setEditModal((m) => !m);
    }
  };

  const updatedTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      title: title.length ? title : task.title,
      description: description.length ? description : task.description,
      isCompleted: isTrue
    };
    editTask({ id: task.id, data: updatedTask }).then((res) => {
        if (res.data.success) {
          toast.success("Task Updated successfully", { duration: 2500 });
          setTimeout(() => {
            setEditModal((m) => !m);
          }, 1000);
        }
      console.log(res.data);
    });
    console.log(updatedTask);
  };
  return (
    <>
      <Toaster />
      <div
        id="container"
        className="bg-opacity-30 backdrop-blur-lg fixed inset-0 flex justify-center z-20 py-10"
        onClick={closeModal}
      >
        <div className="max-w-2xl rounded-xl p-10 relative shad h-max">
          <h1 className="text-2xl font-bold mb-10">Update Task</h1>
          <button
            className=" text-red-500 absolute top-2 right-2 bg-red-200 p-2 rounded-full hover:bg-red-300"
            onClick={() => setEditModal((m) => !m)}
          >
            <VscChromeClose className="text-xl" />
          </button>
          <div>
            <form>
              <input
                type="text"
                placeholder="Title"
                className="p-2 bg-slate-200 w-96"
                onChange={(e) => setTitle(e.target.value)}
                required
                defaultValue={task.title}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="p-2 bg-slate-200 my-5 w-96"
                onChange={(e) => setDescription(e.target.value)}
                required
                defaultValue={task.description}
              />
              <br />
              <div className="my-5">
                <input
                  type="radio"
                  value="true"
                  checked={Boolean(isTrue)}
                  onChange={()=>setIsTrue(true)}
                />{" "}
                Completed
                <input
                  type="radio"
                  value="false"
                  className="ml-5"
                  checked={Boolean(!isTrue)}
                  onChange={()=>setIsTrue(false)}
                />{" "}
                Pending
              </div>
              <button
                className="bg-blue-500 px-10 text-white p-2 w-96 rounded"
                onClick={updatedTask}
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
