import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function Task({ task }) {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div className="p-5 border-2 border-gray-200 rounded-lg my-2">
      <h1>{task.title}</h1>
      <h1>{task.description}</h1>
      <button className="bg-red-500 px-5 py-2 mt-3" onClick={() => setDeleteModal(true)}>Delete</button>
      <div>
        {deleteModal && (
          <DeleteModal
            view={deleteModal}
            setModal={setDeleteModal}
            id={task.id}
          />
        )}
      </div>
    </div>
  );
}
