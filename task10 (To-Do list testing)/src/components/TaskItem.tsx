import React from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        data-testid={`toggle-task-${task.id}`}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)} data-testid={`delete-task-${task.id}`}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
