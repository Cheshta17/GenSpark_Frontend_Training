import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markTaskCompleted } from "../redux/authSlice";

const UserDashboard = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
