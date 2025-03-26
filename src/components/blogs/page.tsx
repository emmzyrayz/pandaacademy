"use client";

// components/BlogSection.tsx
import {
  BlogPost,
  ReactionType,
  BlogType,
  Comment,
  COMMENTS_DATA,
  getUserById,
} from "@/assets/data/blogData";
import {useState, useEffect, useRef} from "react";
import {useSwipeable} from "react-swipeable";
import {useRouter} from "next/navigation";
import {Reactions} from "../UI/Reaction";
import {BLOG_DATA} from "@/assets/data/blogData";
import {useUserIdentifier} from "@/hooks/useUserIdentifier";
import {ImageGalleryModal} from "../UI/ImageGalleryModal";
import Image from "next/image";
import { SocialMediaPostCard } from "./socialMediaPostCard";

// data/blogData.ts
interface BlogCardProps extends BlogPost {
  onReaction: (id: number, reaction: ReactionType | null, action?: 'add' | 'remove') => void;
  onShare: (id: number) => void;
  onImageOpen: (images: string[], index: number) => void;
  hideInteractions?: boolean;
}

interface SocialMediaSectionProps {
  title?: string;
  filterByTag?: string[];
  filterByAuthor?: number[];
  limit?: number;
  showLoadMore?: boolean;
}

interface InstagramStyleFeedProps {
  initialPosts?: number;
  filterByTag?: string[];
  filterByAuthor?: number[];
  useInfiniteScroll?: boolean;
}

export const BlogCard = ({
  id,
  type,
  title,
  excerpt,
  images,
  likes,
  comments,
  shares,
  reactions,
  onReaction,
  onShare,
  onImageOpen,
  hideInteractions = false,
}: BlogCardProps) => {
  const router = useRouter();
  const userIdentifier = useUserIdentifier();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll, images.length]);

  useEffect(() => {
    const userReactions = JSON.parse(
      localStorage.getItem("blogReactions") || "{}"
    );
    setUserReaction(userReactions[id]?.reaction || null);
  }, [id]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true,
  });

  const handleReaction = (reaction: ReactionType) => {
    const userReactions = JSON.parse(
      localStorage.getItem("blogReactions") || "{}"
    );

    // Check if user already has a reaction
    const existingReaction = userReactions[id]?.reaction;

    // If user clicks the same reaction they already had, remove it
    if (existingReaction === reaction) {
      handleRemoveReaction();
      return;
    }

    // If user had a different reaction before, subtract it first
    if (existingReaction) {
      onReaction(id, existingReaction, "remove");
    }

    // Set new reaction
    userReactions[id] = {reaction, user: userIdentifier};
    localStorage.setItem("blogReactions", JSON.stringify(userReactions));
    setUserReaction(reaction);
    onReaction(id, reaction, "add");
  };

  const handleRemoveReaction = () => {
    const userReactions = JSON.parse(
      localStorage.getItem("blogReactions") || "{}"
    );
    if (userReactions[id]) {
      const existingReaction = userReactions[id].reaction;
      onReaction(id, existingReaction, "remove");
      delete userReactions[id];
      localStorage.setItem("blogReactions", JSON.stringify(userReactions));
      setUserReaction(null);
    }
  };

  const handleImageClick = () => {
    onImageOpen(images, activeIndex);
  };

  const handleContentClick = () => {
    router.push(`/blog/${id}`, {scroll: false});
  };

  const handleCommentClick = () => {
    router.push(`/blog/${id}#comments`, {scroll: false});
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      {/* Type Badge */}
      <div className="absolute top-2 left-2 z-10 bg-black/80 px-3 py-1 rounded-full text-sm capitalize text-white/70">
        {type}
      </div>

      {/* Image Carousel */}
      <div
        {...handlers}
        className="relative h-64 w-full overflow-hidden"
        onClick={handleImageClick}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Blog visual ${index + 1}`}
              className="w-full h-full object-cover"
              width={300}
              height={500}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="text-xl font-bold text-white mb-2 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={handleContentClick}
        >
          {title}
        </h3>
        <p
          className="text-gray-300 line-clamp-2 mb-4 cursor-pointer hover:text-gray-400 transition-colors"
          onClick={handleContentClick}
        >
          {excerpt}
        </p>

        {/* Social Stats */}
        {/* Social Stats - only show if hideInteractions is false */}
        {!hideInteractions && (
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Reactions
                onReaction={handleReaction}
                onRemove={handleRemoveReaction}
                currentReaction={userReaction}
              />
              <span>{Object.values(reactions).reduce((a, b) => a + b, 0)}</span>
            </div>

            <button
              onClick={handleCommentClick}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>💬</span> {comments}
            </button>

            <button
              onClick={() => {
                navigator
                  .share?.({
                    title: title,
                    url: `${window.location.origin}/blog/${id}`,
                  })
                  .then(() => onShare(id));
              }}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>↗️</span> {shares}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Blog Section Wrapper
export const BlogSection = () => {
  const [blogs, setBlogs] = useState(BLOG_DATA);
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
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            {...blog}
            onReaction={handleReaction}
            onShare={handleShare}
            onImageOpen={(images, index) => setGalleryImages({images, index})}
          />
        ))}
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

export const SocialMediaSection = ({
  title = "Latest Posts",
  filterByTag = [],
  filterByAuthor = [],
  limit = 6,
  showLoadMore = true,
}: SocialMediaSectionProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(limit);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  // Load and filter posts
  useEffect(() => {
    let filteredPosts = [...BLOG_DATA];

    // Filter by tags if provided
    if (filterByTag.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.some((tag) => filterByTag.includes(tag))
      );
    }

    // Filter by authors if provided
    if (filterByAuthor.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        filterByAuthor.includes(post.authorId)
      );
    }

    // Sort by date (newest first)
    filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setPosts(filteredPosts);
  }, [filterByTag, filterByAuthor]);

  const handleReaction = (
    id: number,
    reaction: ReactionType | null,
    action: "add" | "remove" = "add"
  ) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          const updatedReactions = {...post.reactions};

          if (action === "add" && reaction) {
            updatedReactions[reaction]++;
          } else if (action === "remove" && reaction) {
            updatedReactions[reaction] = Math.max(
              0,
              updatedReactions[reaction] - 1
            );
          }

          return {
            ...post,
            reactions: updatedReactions,
          };
        }
        return post;
      });
    });
  };

  const handleShare = (id: number) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            shares: post.shares + 1,
          };
        }
        return post;
      });
    });
  };

  const handleImageOpen = (images: string[], index: number) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const loadMore = () => {
    setVisiblePosts((prev) => prev + limit);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-black/80">
      {title && <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.slice(0, visiblePosts).map((post) => {
          const user = getUserById(post.authorId);

          return (
            <SocialMediaPostCard
              key={post.id}
              {...post}
              onReaction={handleReaction}
              onShare={handleShare}
              onImageOpen={handleImageOpen}
              userOnline={user?.isOnline}
              userAvatar={
                user
                  ? `/images/avatars/${user.avatarId}.jpg`
                  : "/images/avatars/default.jpg"
              }
              location={
                post.type === "platform"
                  ? "Platform Update"
                  : user
                  ? `${
                      user.role.charAt(0).toUpperCase() + user.role.slice(1)
                    } Post`
                  : "User Post"
              }
            />
          );
        })}
      </div>

      {showLoadMore && visiblePosts < posts.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Load More
          </button>
        </div>
      )}

      {galleryOpen && (
        <ImageGalleryModal
          images={galleryImages}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
}

export const InstagramStyleFeed = ({
  initialPosts = 5,
  filterByTag = [],
  filterByAuthor = [],
  useInfiniteScroll = true,
}: InstagramStyleFeedProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(initialPosts);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const observerTarget = useRef(null);

  // Load and filter posts
  useEffect(() => {
    let filteredPosts = [...BLOG_DATA];

    // Filter by tags if provided
    if (filterByTag.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.some((tag) => filterByTag.includes(tag))
      );
    }

    // Filter by authors if provided
    if (filterByAuthor.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        filterByAuthor.includes(post.authorId)
      );
    }

    // Sort by date (newest first)
    filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setPosts(filteredPosts);
  }, [filterByTag, filterByAuthor]);

  // Set up infinite scroll
  useEffect(() => {
    if (!useInfiniteScroll || !observerTarget.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visiblePosts < posts.length &&
          !loading
        ) {
          loadMorePosts();
        }
      },
      {threshold: 1.0}
    );

    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [posts, visiblePosts, loading, useInfiniteScroll]);

  const handleReaction = (
    id: number,
    reaction: ReactionType | null,
    action: "add" | "remove" = "add"
  ) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          const updatedReactions = {...post.reactions};

          if (action === "add" && reaction) {
            updatedReactions[reaction]++;
          } else if (action === "remove" && reaction) {
            updatedReactions[reaction] = Math.max(
              0,
              updatedReactions[reaction] - 1
            );
          }

          return {
            ...post,
            reactions: updatedReactions,
          };
        }
        return post;
      });
    });
  };

  const handleShare = (id: number) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            shares: post.shares + 1,
          };
        }
        return post;
      });
    });
  };

  const handleImageOpen = (images: string[], index: number) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts((prev) => Math.min(prev + 3, posts.length));
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black">
      {/* Instagram-style Stories - Optional */}
      <div className="py-4 px-2 overflow-x-auto flex gap-4 border-b border-gray-800">
        {Array.from({length: 6}).map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
                <div className="w-full h-full bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1 truncate w-16 text-center">
              {["Your story", "User1", "User2", "User3", "User4", "User5"][idx]}
            </span>
          </div>
        ))}
      </div>

      {/* Instagram-style Feed */}
      <div className="flex flex-col">
        {posts.slice(0, visiblePosts).map((post) => {
          const user = getUserById(post.authorId);

          return (
            <div key={post.id} className="border-b border-gray-800">
              <SocialMediaPostCard
                {...post}
                onReaction={handleReaction}
                onShare={handleShare}
                onImageOpen={handleImageOpen}
                userOnline={user?.isOnline}
                userAvatar={`/images/avatars/${user?.avatarId}.jpg`}
                location={
                  post.type === "platform"
                    ? "Platform Update"
                    : user?.role === "teacher"
                    ? "Professor"
                    : "Student"
                }
              />
            </div>
          );
        })}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="py-4 flex justify-center">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Intersection observer target for infinite scroll */}
      {visiblePosts < posts.length && useInfiniteScroll && (
        <div ref={observerTarget} className="h-10"></div>
      )}

      {/* "Load More" button (if not using infinite scroll) */}
      {!useInfiniteScroll && visiblePosts < posts.length && (
        <div className="py-4 flex justify-center">
          <button
            onClick={loadMorePosts}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* End of feed message */}
      {visiblePosts >= posts.length && (
        <div className="py-8 text-center text-gray-500">
          <p>You're all caught up! ✨</p>
        </div>
      )}

      {/* Image gallery modal */}
      {galleryOpen && (
        <ImageGalleryModal
          images={galleryImages}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
};