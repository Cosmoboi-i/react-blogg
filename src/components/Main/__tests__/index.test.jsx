import Main from "..";
import React from "react";
import { render, fireEvent, within, waitFor } from "@testing-library/react";
import makeRequest from "../../../utils/makeRequest";
import { mockCardList, mockKeyList } from "../../../__mocks__/main";
import { BlogPostContext, BlogPostProvider } from "../../../contexts/BlogPosts";

jest.mock("../../../utils/makeRequest");

describe("Main", () => {
  it("should render loading component when data is not fetched yet", () => {
    const screen = render(
      <BlogPostProvider>
        <Main />
      </BlogPostProvider>
    );
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render blog posts when data is fetched", async () => {
    makeRequest.mockResolvedValue(mockCardList);
    const screen = render(
      <BlogPostProvider>
        <Main />
      </BlogPostProvider>
    );
    expect(screen.queryByTestId("main")).toBeFalsy();
    await waitFor(() => {
      expect(screen.queryByTestId("main")).toBeTruthy();
    });
  });
});
