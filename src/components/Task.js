import React from "react";

export default function Task({ task }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <h1>{task.description}</h1>
    </div>
  );
}
