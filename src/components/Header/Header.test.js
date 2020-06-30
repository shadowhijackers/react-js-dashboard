import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("render header", () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});
