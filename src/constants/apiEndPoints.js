export const BASE_BACKEND_URL = "http://localhost:8080/";

export const GET_BLOG_DATA = {
  url: "blog-posts",
  method: "get",
};

export const UPDATE_BLOG_DATA = (id) => ({
  url: `blog-posts/${id}`,
  method: "put",
});
