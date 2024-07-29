"use client";

import {useRouter} from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const {blogId} = router.query;

  return (
    <div>
      <h1>Blog Post {blogId}</h1>
      {/* Render the blog post content here */}
    </div>
  );
};

export default BlogPost;
