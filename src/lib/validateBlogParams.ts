// lib/validateBlogParams.ts
export const validateBlogId = (id: string) => {
  const blogId = parseInt(id, 10);
  if (isNaN(blogId)) return {error: "Invalid blog ID"};
  return {blogId};
};
