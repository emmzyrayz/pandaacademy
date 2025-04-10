"use client";

// components/blogs/BlogSection.tsx
import {BlogPost, ReactionType, BlogType} from "@/assets/data/blogData";
import {useState, useEffect} from "react";
import {BLOG_DATA} from "@/assets/data/blogData";
import {useUserIdentifier} from "@/hooks/useUserIdentifier";
import {ImageGalleryModal} from "../UI/ImageGalleryModal";
import {BlogCard} from "./page"; // Assuming you've moved BlogCard to its own file
import {SocialMediaPostCard} from "./socialMediaPostCard";

export const BlogSection = () => {
  const [blogs, setBlogs] = useState(BLOG_DATA);
  const [layoutMode, setLayoutMode] = useState<"mixed" | "cards" | "social">(
    "mixed"
  );
  const [galleryImages, setGalleryImages] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const handleReaction = (
    blogId: number,
    reaction: ReactionType | null,
    action: "add" | "remove" = "add"
  ) => {
    setBlogs((prev) =>
      prev.map((blog) => {
        if (blog.id !== blogId) return blog;

        const newReactions = {...blog.reactions};
        if (reaction) {
          // If removing a reaction, subtract 1
          if (action === "remove") {
            newReactions[reaction] = Math.max(
              0,
              (newReactions[reaction] || 0) - 1
            );
          }
          // If adding a reaction, add 1
          else {
            newReactions[reaction] = (newReactions[reaction] || 0) + 1;
          }
        }

        return {
          ...blog,
          reactions: newReactions,
          likes: Object.values(newReactions).reduce((a, b) => a + b, 0),
        };
      })
    );
  };

  const handleShare = (blogId: number) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === blogId ? {...blog, shares: blog.shares + 1} : blog
      )
    );
  };

  return (
    <section className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      {/* Layout Toggle */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-center">
        <div className="bg-gray-800 p-1 rounded-lg flex gap-1">
          <button
            onClick={() => setLayoutMode("mixed")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              layoutMode === "mixed"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setLayoutMode("cards")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              layoutMode === "cards"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            Platform Knowledge
          </button>
          <button
            onClick={() => setLayoutMode("social")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              layoutMode === "social"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            Community Posts
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        {(layoutMode === "cards" || layoutMode === "mixed") && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-8">
            {blogs
              .filter((blog) =>
                layoutMode === "cards" ? blog.type === "platform" : true
              )
              .filter((blog) =>
                layoutMode === "mixed" ? blog.type === "platform" : true
              )
              .map((blog) => (
                <BlogCard
                  key={blog.id}
                  {...blog}
                  onReaction={handleReaction}
                  onShare={handleShare}
                  onImageOpen={(images, index) =>
                    setGalleryImages({images, index})
                  }
                />
              ))}
          </div>
        )}

        {(layoutMode === "social" || layoutMode === "mixed") && (
          <div className="max-w-xl mx-auto space-y-6">
            {blogs
              .filter((blog) =>
                layoutMode === "social" ? blog.type !== "platform" : true
              )
              .filter((blog) =>
                layoutMode === "mixed" ? blog.type !== "platform" : true
              )
              .map((blog) => (
                <SocialMediaPostCard
                  key={blog.id}
                  {...blog}
                  onReaction={handleReaction}
                  onShare={handleShare}
                  onImageOpen={(images, index) =>
                    setGalleryImages({images, index})
                  }
                  userOnline={Math.random() > 0.5} // Random for demo, replace with actual online status
                />
              ))}
          </div>
        )}
      </div>

      {galleryImages && (
        <ImageGalleryModal
          images={galleryImages.images}
          initialIndex={galleryImages.index}
          onClose={() => setGalleryImages(null)}
        />
      )}
    </section>
  );
};
