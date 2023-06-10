import { useSelector } from "react-redux";
import { useGetTasksQuery } from "./redux/slices/apiSlice";

function App() {
  const state = useSelector((state) => state);
  const {data} = useGetTasksQuery();
  console.log(data);
  return <div className="bg-red-500">hello</div>;
}

export default App;
