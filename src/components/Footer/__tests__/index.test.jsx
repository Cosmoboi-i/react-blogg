import { render } from "@testing-library/react";
import React from "react";
import Footer from "..";

describe("Footer", () => {
  it("should render Footer component", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
