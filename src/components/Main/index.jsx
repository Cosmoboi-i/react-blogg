import { React, useContext, useEffect } from "react";
import "./main.css";
import Card from "../Card/index";
import { v4 as uuid } from "uuid";
import "./main.css";
import makeRequest from "../../utils/makeRequest";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogPostContext } from "../../contexts/BlogPosts/index";

export default function Main() {
  const { blogData, setBlogData } = useContext(BlogPostContext);

  useEffect(() => {
    console.log(setBlogData);
    (async function fetchData() {
      const res = await makeRequest(GET_BLOG_DATA);
      console.log(res);
      setBlogData(res);
    })();
  }, []);

  return blogData ? (
    <div className="main" data-testid="main">
      <div className="cardpane content">
        {blogData.map((blog, index) => (
          <Card key={uuid()} id={index + 1} {...blog} />
        ))}
      </div>
    </div>
  ) : (
    <div className="Loading">Loading...</div>
  );
}
