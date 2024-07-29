"use client";

import {useRouter} from "next/router";

const BlogComment = () => {
  const router = useRouter();
  const {blogId, commentId} = router.query;

  return (
    <div>
      <h1>
        Blog Post {blogId} - Comment {commentId}
      </h1>
      {/* Render the comment content here */}
    </div>
  );
};

export default BlogComment;
