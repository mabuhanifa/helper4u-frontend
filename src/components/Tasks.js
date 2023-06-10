import React from "react";
import { useGetTasksQuery } from "../redux/slices/apiSlice";

export default function Tasks() {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  return (
    <div>
      {tasks && tasks.map((task) => <div key={task.id}>{task.title}</div>)}
    </div>
  );
}
