import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";

test("adds a task when Add Task button is clicked", () => {
  const onAddTaskMock = jest.fn();
  render(<AddTask onAddTask={onAddTaskMock} />);

  const input = screen.getByTestId("task-input");
  const button = screen.getByTestId("add-task-button");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(onAddTaskMock).toHaveBeenCalledWith("New Task");
});
