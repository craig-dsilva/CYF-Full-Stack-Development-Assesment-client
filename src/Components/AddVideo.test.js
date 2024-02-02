import { render, screen, fireEvent } from "@testing-library/react";
import AddVideo from "./AddVideo";

describe("Form validation", () => {
  render(<AddVideo />);

  test("Should throw error if title is not provided", () => {
    fireEvent.click(screen.getByText("Add"));
    const titleError = screen.getByTestId("title-error").textContent;
    expect(titleError).toBe("Please enter a title");
  });
});
