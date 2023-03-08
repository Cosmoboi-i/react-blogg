import React from "react";
import {
  render,
  fireEvent,
  getByAltText,
  within,
} from "@testing-library/react";
import Card from "..";
import { mockCard, mockKey } from "../../../__mocks__/card";

describe("Card", () => {
  it("should render the Card", () => {
    const { asFragment } = render(<Card key={mockKey} {...mockCard} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should set heart icon to red when clicked and it is black", () => {
    const screen = render(<Card key={mockKey} {...mockCard} />);
    const heart = screen.getByAltText("heart");

    expect(heart.src).toContain("heart-black.svg");
    fireEvent.click(heart);
    expect(heart.src).toContain("heart-red.svg");
  });

  it("should set heart icon to black when clicked and it is red", () => {
    const screen = render(<Card key={mockKey} {...mockCard} />);
    const heart = screen.getByAltText("heart");

    fireEvent.click(heart);
    expect(heart.src).toContain("heart-red.svg");
    fireEvent.click(heart);
    expect(heart.src).toContain("heart-black.svg");
  });

  it("should increase clap count by 1 when clicked on clap icon", () => {
    const screen = render(<Card key={mockKey} {...mockCard} />);
    const clap = screen.getByAltText("clap");
    const clapCount = screen.getByTestId("clap-count");
    expect(clapCount.textContent).toBe("10");
    fireEvent.click(clap);
    expect(clapCount.textContent).toBe("11");
  });
});
