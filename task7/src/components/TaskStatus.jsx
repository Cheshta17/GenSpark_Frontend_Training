import React from "react";
import { useSelector } from "react-redux";

const TaskStatus = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-status">
      <h3>Task Status</h3>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default TaskStatus;
