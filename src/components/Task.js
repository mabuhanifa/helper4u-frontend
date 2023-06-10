import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Task({ task }) {
  
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="p-5 border-2 border-gray-200 rounded-lg my-2">
      <h1>{task.title}</h1>
      <h1>{task.description}</h1>
      <button
        className="bg-red-500 px-5 py-2 mt-3"
        onClick={() => setDeleteModal(true)}
      >
        Delete
      </button>
      <button
        className="bg-green-500 px-5 py-2 mt-3"
        onClick={() => setEditModal(true)}
      >
        Edit
      </button>
      <div>
        {deleteModal && (
          <DeleteModal
            view={deleteModal}
            setModal={setDeleteModal}
            id={task.id}
          />
        )}

        {EditModal && <EditModal view={editModal} setEditModal={setEditModal} task={task} />}
      </div>
    </div>
  );
}
