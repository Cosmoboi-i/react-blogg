import { render } from "@testing-library/react";
import React from "react";
import Header from "..";

describe("Footer", () => {
  it("should render Footer component", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
