import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the To-Do List heading", () => {
  render(<App />);
  expect(screen.getByText("To-Do List")).toBeInTheDocument();
});
