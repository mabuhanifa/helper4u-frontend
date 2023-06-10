import Nav from "./components/Nav";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <div className="flex justify-center p-10"> 
        <Nav/>
      </div>
      <div className="flex justify-center p-10"> 
      <Tasks/>
      </div>
    </div>
  );
}

export default App;
