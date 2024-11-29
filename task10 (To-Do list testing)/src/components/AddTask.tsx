import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="task-input"
      />
      <button onClick={handleAddTask} data-testid="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
