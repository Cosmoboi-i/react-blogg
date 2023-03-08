import React from "react";
import { Main } from "../../components";
import { BlogPostProvider } from "../../contexts/BlogPosts/index";

export default function Home() {
  return (
    <BlogPostProvider>
      <Main />
    </BlogPostProvider>
  );
}
