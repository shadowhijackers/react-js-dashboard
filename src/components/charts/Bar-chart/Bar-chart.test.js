import React from "react";
import { render } from "@testing-library/react";
import BarChart from "./Bar-chart";

test("render bar chart", () => {
  const config = {
    width: "150px",
    height: "120px",
    series: [
      {
        color: "#757ce8",
        data: [1, 5, 3, 4],
      },
    ],
  };
  const { container, getByText } = render(<BarChart config={config} />);
  const xAxisTitle = getByText(/Series/i);
  expect(xAxisTitle).toBeInTheDocument();
  expect(container).toBeDefined();
});
