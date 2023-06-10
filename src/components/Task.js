import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Task({ task }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="p-3 md:p-5 border-2 border-gray-200 rounded-lg my-2 flex justify-around items-center">
      <div className="md:w-[70vw]">
        <h1 className="text-xl font-bold text-gray-800 my-3">{task.title}</h1>
        <h1 className="text-gray-600 font-[500]">{task.description}</h1>
        <div className="my-3">
          <p>
            {task.isCompleted ? (
              <span className="text-sm font-[500] bg-green-500  text-white px-2 py-1 rounded">
                Completed
              </span>
            ) : (
              <span className="text-sm font-[500] bg-red-500 text-white px-2 py-1 rounded">Pending</span>
            )}
          </p>
        </div>
      </div>

      <div>
        <button
          className="text-red-500 px-5 py-2"
          onClick={() => setDeleteModal(true)}
        >
          <VscTrash size={25} />
        </button>
        <button
          className="text-green-500 px-5 py-2"
          onClick={() => setEditModal(true)}
        >
          <CiEdit size={25} />
        </button>
      </div>
      <div>
        {deleteModal && (
          <DeleteModal
            view={deleteModal}
            setModal={setDeleteModal}
            id={task.id}
          />
        )}

        {EditModal && (
          <EditModal view={editModal} setEditModal={setEditModal} task={task} />
        )}
      </div>
    </div>
  );
}
