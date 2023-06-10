import React from "react";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Tasks() {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  return (
    <div>
      {tasks && tasks.map((task) => <Task task={task} key={task.id}/>)}
    </div>
  );
}
