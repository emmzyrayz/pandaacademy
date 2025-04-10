// app/blog/[id]/page.tsx
import {notFound} from "next/navigation";
import {BLOG_DATA} from "@/assets/data/blogData";
import {BlogCard} from "@/components/blogs/page";
import { validateBlogId } from "@/lib/validateBlogParams";
import { BlogDetailDisplay } from "./BlogDetail";
import {Metadata} from "next";

export async function generateMetadata({
  params,
}: {
  params: {id: string};
}): Promise<Metadata> {
  // Need to await params in Next.js 15
  const id = (await params).id;
  const validation = validateBlogId(id);

  if (validation.error) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const blog = BLOG_DATA.find((b) => b.id === validation.blogId);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.images.length > 0 ? [{url: blog.images[0]}] : [],
    },
  };
}

export default async function BlogDetail({params}: {params: {id: string}}) {
  // Get the ID directly from params
  const id = (await params).id;

  // Validate the ID
  const validation = validateBlogId(id);
  if (validation.error) notFound();

  // Find the blog post
  const blog = BLOG_DATA.find((b) => b.id === validation.blogId);
  if (!blog) notFound();

  // Get related posts (similar tags)
  const relatedPosts = BLOG_DATA.filter(
    (post) =>
      post.id !== blog.id && post.tags.some((tag) => blog.tags.includes(tag))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>
          <div className="text-gray-400 mb-6">By {blog.author}</div>

          {/* Image Gallery - choose one approach */}
          <div className="mb-6">
            <BlogDetailDisplay blog={blog} />
            {/* Or use: <BlogDetailClient blog={blog} /> */}
          </div>

          <div className="prose prose-invert max-w-none">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Comments Section */}
          <div className="mt-8 border-t border-white/20 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Comments ({blog.comments})
            </h3>
            <div className="space-y-4">
              {/* Add comment input and list here */}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
