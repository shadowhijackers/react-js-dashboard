import React from "react";
import { render } from "@testing-library/react";
import PieChart from "./Pie-chart";

test("render pie chart", () => {
  const config = {
    width: "150px",
    height: "120px",
    series: [
      {
        name: "Brands",
        data: [
          {
            name: "Chrome",
            y: 61.41,
          },
          {
            name: "Safari",
            y: 4.18,
          },
          {
            name: "Other",
            y: 2.61,
          },
        ],
      },
    ],
  };
  const { getByText } = render(<PieChart config={config} />);
  const partName = getByText(/Chrome/i);
  expect(partName).toBeInTheDocument();
});
