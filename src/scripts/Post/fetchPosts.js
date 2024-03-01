import { server } from "../server/server.js";
import { appendPost } from "./appendPost.js";

let nextPage = 1
let isLoading = false
let shouldLoad = true

async function fetchPosts(needReset = false) {
  if (needReset) {nextPage = 1, isLoading = false, shouldLoad = true}
  if (isLoading || !shouldLoad) return;

  isLoading = true;

  const { posts, next } = await server.posts(nextPage);
  posts.forEach(appendPost);

  nextPage = next;
  if (!next) shouldLoad = false;

  isLoading = false;
}

export { fetchPosts };
