"use client";

import {useRouter} from "next/router";

const BlogRepost = () => {
  const router = useRouter();
  const {blogId, repostId} = router.query;

  return (
    <div>
      <h1>
        Blog Post {blogId} - Repost {repostId}
      </h1>
      {/* Render the repost content here */}
    </div>
  );
};

export default BlogRepost;
