import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, markTaskCompleted } from "../redux/authSlice";

const AdminDashboard = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() && deadline.trim()) {
      const newTask = {
        task,
        createdAt: new Date().toLocaleString(),
        deadline,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTask("");
      setDeadline("");
    }
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <div>
              <p>
                <strong>Task:</strong> {t.task}
              </p>
              <p>
                <strong>Created At:</strong> {t.createdAt}
              </p>
              <p>
                <strong>Deadline:</strong> {t.deadline}
              </p>
              <p>
                <strong>Status:</strong> {t.completed ? "Completed" : "Pending"}
              </p>
              <button onClick={() => dispatch(markTaskCompleted(index))}>
                Mark as Completed
              </button>
              <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
