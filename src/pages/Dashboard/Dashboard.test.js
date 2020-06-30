import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("render header and sidenav", () => {
  const { getByText } = render(<Dashboard />);
  const headerElement = getByText(/Home/i);
  const sideNavElement = getByText(/Templates/i);
  expect(headerElement).toBeInTheDocument();
  expect(sideNavElement).toBeInTheDocument();
});
