"use client";

// app/blog/[id]/BlogDetailDisplay.tsx
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
// import {BlogPost, ReactionType} from "@/assets/data/blogData";
import {Reactions} from "@/components/UI/Reaction";
import {ShareModal} from "@/components/UI/ShareModal";
import Link from "next/link";
import {useUserIdentifier} from "@/hooks/useUserIdentifier";
import {ImageGalleryModal} from "@/components/UI/ImageGalleryModal";
import {
  FiMessageSquare,
  FiShare2,
  FiSend,
  FiMoreHorizontal,
} from "react-icons/fi";
import {HiOutlineThumbUp} from "react-icons/hi";

// Define proper types
export interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
}

export type ReactionType = "like" | "love" | "haha" | "wow" | "sad" | "angry";

export interface Reactions {
  like: number;
  love: number;
  haha: number;
  wow: number;
  sad: number;
  angry: number;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  images?: string[];
  comments: Comment[];
  reactions: Reactions;
  shares: number;
}

interface BlogDetailDisplayProps {
  blog: BlogPost;
  isPreview?: boolean;
  showComments?: boolean;
}

// Ensure blog.comments has a default value to prevent errors
const getInitialComments = (blog: BlogPost): Comment[] => {
  return blog.comments || [];
};

// const images = blog.images || [];

export function BlogDetailDisplay({
  blog,
  isPreview = false,
  showComments = false,
}: BlogDetailDisplayProps) {
  const router = useRouter();
  const userIdentifier = useUserIdentifier();
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reactions, setReactions] = useState(blog.reactions);
  const [shares, setShares] = useState(blog.shares);
  const [showReactionsPicker, setShowReactionsPicker] = useState(false);
  const [comments, setComments] = useState(getInitialComments(blog));
  const [newComment, setNewComment] = useState("");
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Format date to be more readable
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const handleReaction = (reaction: ReactionType) => {
    const existingReaction = userReaction;

    // If user clicks the same reaction they already had, remove it
    if (existingReaction === reaction) {
      setUserReaction(null);
      setReactions((prev) => ({
        ...prev,
        [reaction]: Math.max(0, prev[reaction] - 1),
      }));
      return;
    }

    // If user had a different reaction before, subtract it first
    if (existingReaction) {
      setReactions((prev) => ({
        ...prev,
        [existingReaction]: Math.max(0, prev[existingReaction] - 1),
      }));
    }

    // Set new reaction
    setUserReaction(reaction);
    setReactions((prev) => ({
      ...prev,
      [reaction]: prev[reaction] + 1,
    }));

    // Hide the reactions picker
    setShowReactionsPicker(false);
  };

  const handleRemoveReaction = () => {
    if (userReaction) {
      setReactions((prev) => ({
        ...prev,
        [userReaction]: Math.max(0, prev[userReaction] - 1),
      }));
      setUserReaction(null);
    }
  };

  const handleShare = (shareType: string) => {
    setShares((prev) => prev + 1);
    setIsShareModalOpen(false);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Math.random().toString(36).substring(2, 9),
        text: newComment,
        author: "You",
        timestamp: new Date(),
      };
      setComments((prev) => [...prev, newCommentObj]);
      setNewComment("");
    }
  };

  const handleImageClick = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  // Truncate content for preview with "See More" option
  const contentPreview = blog.content.split("\n")[0];
  const hasMoreContent =
    blog.content.split("\n").length > 1 || blog.content.length > 300;
  const displayContent =
    showFullContent || !hasMoreContent
      ? blog.content
      : contentPreview.length > 300
      ? contentPreview.substring(0, 300) + "..."
      : contentPreview;

  // If this is a preview, show a simpler version
  if (isPreview) {
    return (
      <Link href={`/blog/${blog.id}`} className="block">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/15 transition-colors">
          {blog.images && blog.images.length > 0 && (
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={blog.images[0]}
                alt={blog.title}
                className="w-full h-full object-cover"
                width={600}
                height={300}
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{blog.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{blog.author}</span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  const images = blog.images || [];

  // Full blog display with Facebook-style layout
  return (
    <article className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden mb-8 shadow-lg">
      {/* Post Header - Author Info */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-gray-400">
            <Image
              src={`https://picsum.photos/seed/${blog.author}/100/100`}
              alt={blog.author}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{blog.author}</h2>
            <p className="text-gray-400 text-xs flex items-center">
              {formattedDate} · <span className="ml-1 text-lg">🌐</span>
            </p>
          </div>
        </div>

        {/* Post Menu Button */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            <FiMoreHorizontal className="text-gray-300" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Save post
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Hide post
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Report post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        {/* Title as first line of content - Facebook style */}
        <div className="prose prose-invert max-w-none">
          {displayContent.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-3 text-gray-200 text-base">
              {index === 0 ? <strong>{paragraph}</strong> : paragraph}
            </p>
          ))}

          {hasMoreContent && !showFullContent && (
            <button
              onClick={() => setShowFullContent(true)}
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              See more
            </button>
          )}
        </div>

        {/* Tags displayed as hashtags */}
        <div className="flex flex-wrap gap-1 my-2">
          {blog.tags &&
            blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-blue-400 hover:underline cursor-pointer text-sm"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
        </div>
      </div>

      {/* Image Gallery */}
      {blog.images && blog.images.length > 0 && (
        <div className="mb-2">
          {blog.images.length === 1 ? (
            <div
              className="relative aspect-video cursor-pointer"
              onClick={() => handleImageClick(0)}
            >
              <Image
                src={blog.images[0]}
                alt={`${blog.title} image`}
                className="w-full h-full object-cover"
                width={800}
                height={450}
              />
            </div>
          ) : blog.images.length === 2 ? (
            <div className="grid grid-cols-2 gap-1">
              {blog.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={image}
                    alt={`${blog.title} image ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          ) : blog.images.length === 3 ? (
            <div className="grid grid-cols-2 gap-1">
              <div
                className="relative aspect-square row-span-2 cursor-pointer"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={blog.images[0]}
                  alt={`${blog.title} image 1`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={800}
                />
              </div>
              <div
                className="relative aspect-square cursor-pointer"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={blog.images[1]}
                  alt={`${blog.title} image 2`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div
                className="relative aspect-square cursor-pointer"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={blog.images[2]}
                  alt={`${blog.title} image 3`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-1">
              {blog.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={image}
                    alt={`${blog.title} image ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                  {index === 3 && images?.length > 4 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        +{images?.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Interaction Stats */}
      <div className="px-4 py-2 flex justify-between text-sm text-gray-400 border-t border-white/10">
        <div className="flex items-center">
          <div className="flex -space-x-1 mr-2">
            {userReaction && (
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-gray-800">
                <span className="text-xs">
                  {userReaction === "like"
                    ? "👍"
                    : userReaction === "love"
                    ? "❤️"
                    : userReaction === "haha"
                    ? "😂"
                    : userReaction === "wow"
                    ? "😮"
                    : userReaction === "sad"
                    ? "😢"
                    : "😡"}
                </span>
              </div>
            )}
            {Object.entries(reactions)
              .filter(
                ([key, count]) =>
                  count > 0 && (!userReaction || key !== userReaction)
              )
              .slice(0, 2)
              .map(([key], index) => (
                <div
                  key={key}
                  className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-gray-800"
                >
                  <span className="text-xs">
                    {key === "like"
                      ? "👍"
                      : key === "love"
                      ? "❤️"
                      : key === "haha"
                      ? "😂"
                      : key === "wow"
                      ? "😮"
                      : key === "sad"
                      ? "😢"
                      : "😡"}
                  </span>
                </div>
              ))}
          </div>
          <span>{Object.values(reactions).reduce((a, b) => a + b, 0)}</span>
        </div>
        <div className="flex gap-4">
          <span>{comments.length} comments</span>
          <span>{shares} shares</span>
        </div>
      </div>

      {/* Interaction Buttons */}
      <div className="px-2 py-1 border-t border-white/10 grid grid-cols-3">
        {/* Using the Reactions component */}
        <div className="relative">
          <Reactions
            onReaction={handleReaction}
            onRemove={handleRemoveReaction}
            currentReaction={userReaction}
          />
        </div>

        <button
          className="flex items-center justify-center w-full py-2 rounded-md text-gray-300 hover:bg-white/10 transition"
          onClick={() => {
            // Expand comment section automatically
            if (!showComments) {
              // If this prop is controlled externally, you might need to emit an event
            }
          }}
        >
          <FiMessageSquare className="mr-2" />
          <span>Comment</span>
        </button>

        <button
          className="flex items-center justify-center w-full py-2 rounded-md text-gray-300 hover:bg-white/10 transition"
          onClick={() => setIsShareModalOpen(true)}
        >
          <FiShare2 className="mr-2" />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {(showComments || comments.length > 0) && (
        <div className="px-4 py-3 border-t border-white/10">
          {/* Comment Input */}
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src={`https://picsum.photos/seed/user${userIdentifier}/100/100`}
                alt="Your profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleComment()}
                placeholder="Write a comment..."
                className="w-full bg-white/10 rounded-full py-2 px-4 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleComment}
                disabled={!newComment.trim()}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 ${
                  !newComment.trim()
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <FiSend />
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {comments.map((comment) => (
              <div key={comment.id} className="flex">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                  <Image
                    src={`https://picsum.photos/seed/${comment.author}/100/100`}
                    alt={comment.author}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="bg-white/10 rounded-2xl py-2 px-3 max-w-[85%]">
                  <div className="font-medium text-white text-sm">
                    {comment.author}
                  </div>
                  <p className="text-gray-300 text-sm">{comment.text}</p>
                  <div className="mt-1 text-xs text-gray-400 flex gap-4">
                    <button className="hover:text-gray-200">Like</button>
                    <button className="hover:text-gray-200">Reply</button>
                    <span>
                      {comment.timestamp instanceof Date
                        ? comment.timestamp.toLocaleDateString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Just now"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          onClose={() => setIsShareModalOpen(false)}
          onShare={handleShare}
          shareUrl={`/blog/${blog.id}`}
          shareTitle={blog.title}
        />
      )}

      {/* Image Gallery Modal */}
      {galleryOpen && blog.images && (
        <ImageGalleryModal
          images={blog.images}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </article>
  );
}
