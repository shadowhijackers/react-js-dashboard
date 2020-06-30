import React from "react";
import { render } from "@testing-library/react";
import A4Sheet from "./A4-sheet";

test("render A4 sheet", () => {
  const component = render(<A4Sheet />);
  expect(!!component.container.querySelector(".A4Sheet__page")).toBe(true);
});
