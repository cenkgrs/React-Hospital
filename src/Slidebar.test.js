import React from "react";
import { render } from "@testing-library/react";
import Slidebar from "./Slidebar";

test("renders learn react link", () => {
  const { getByText } = render(<Slidebar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
