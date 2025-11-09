import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// Example component for testing
function ExampleComponent() {
  return <div>Hello World</div>;
}

describe("ExampleComponent", () => {
  it("renders hello world", () => {
    render(<ExampleComponent />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
