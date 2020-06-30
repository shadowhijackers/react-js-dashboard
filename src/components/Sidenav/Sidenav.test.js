import React from "react";
import { render } from "@testing-library/react";
import Sidenav from "./Sidenav";

test("render sidenav", () => {
  const { getByText } = render(<Sidenav />);
  const sideNavElement = getByText(/Update/i);
  expect(sideNavElement).toBeInTheDocument();
});
