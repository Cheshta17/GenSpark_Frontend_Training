import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { Task } from "../types/Task";

const tasks: Task[] = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

test("renders task items correctly", () => {
  render(
    <TaskList
      tasks={tasks}
      onToggleTask={jest.fn()}
      onDeleteTask={jest.fn()}
    />
  );

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});
