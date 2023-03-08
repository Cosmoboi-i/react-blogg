import React, { createContext, useState } from "react";

export const BlogPostContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const BlogPostProvider = ({ children }) => {
  const [blogData, setBlogData] = useState(null);

  return (
    <BlogPostContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogPostContext.Provider>
  );
};
