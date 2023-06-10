import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Tasks from "./components/Tasks";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Toaster />
      <div className="flex justify-center p-10">
        <Nav />
      </div>
      <div>
        {modal && <Modal view={modal} setModal={setModal} />}
        <div className="flex justify-center">
          <button
            onClick={() => setModal(true)}
            className="px-10 py-3 bg-indigo-700 hover:bg-indigo-900 font-bold text-white uppercase rounded"
          >
            Create Task
          </button>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
