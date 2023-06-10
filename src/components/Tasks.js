import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Tasks() {
  const { filter } = useSelector((state) => state.tasks);
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  if (isLoading) {
    return <p>Loading... Please wait for 30 seconds for first load from server</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }
  return (
    <div>
      {tasks &&
        tasks
          .filter((task) =>
            task.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
}
