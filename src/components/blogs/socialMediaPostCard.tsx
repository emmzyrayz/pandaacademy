"use client";

// components/blogs/SocialMediaPostCard.tsx
import {BlogPost, ReactionType} from "@/assets/data/blogData";
import {useState, useEffect} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Reactions} from "../UI/Reaction";
import {useUserIdentifier} from "@/hooks/useUserIdentifier";
import {ImageGalleryModal} from "../UI/ImageGalleryModal";
import {ShareModal} from "../UI/ShareModal";

interface SocialMediaPostCardProps extends BlogPost {
  onReaction: (
    id: number,
    reaction: ReactionType | null,
    action?: "add" | "remove"
  ) => void;
  onShare: (id: number) => void;
  onImageOpen: (images: string[], index: number) => void;
  hideInteractions?: boolean;
  userOnline?: boolean;
  userAvatar?: string;
  location?: string;
}

interface InstagramPostCardProps extends BlogPost {
  onReaction: (
    id: number,
    reaction: ReactionType | null,
    action?: "add" | "remove"
  ) => void;
  onShare: (id: number) => void;
  onImageOpen: (images: string[], index: number) => void;
  userOnline?: boolean;
  userAvatar?: string;
  location?: string;
}

export const SocialMediaPostCard = ({
  id,
  type,
  title,
  excerpt,
  content,
  images,
  likes,
  comments,
  shares,
  date,
  author,
  reactions,
  onReaction,
  onShare,
  onImageOpen,
  hideInteractions = false,
  userOnline = false,
  userAvatar = "https://picsum.photos/100/100",
  location = "Campus Hub",
}: SocialMediaPostCardProps) => {
  const router = useRouter();
  const userIdentifier = useUserIdentifier();
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Check if content should be clipped (more than 3 lines)
  const shouldClipContent = content.length > 280; // Approximate character count for 3 lines
  const displayContent =
    !isTextExpanded && shouldClipContent
      ? content.substring(0, 280) + "..."
      : content;

  useEffect(() => {
    const userReactions = JSON.parse(
      localStorage.getItem("blogReactions") || "{}"
    );
    setUserReaction(userReactions[id]?.reaction || null);
  }, [id]);

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

  const handleImageClick = (index: number) => {
    onImageOpen(images, index);
  };

  const handleContentClick = () => {
    router.push(`/blog/${id}`, {scroll: false});
  };

  const handleCommentClick = () => {
    router.push(`/blog/${id}#comments`, {scroll: false});
  };

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* User Info Header */}
      <div className="flex items-center p-4 border-b border-white/10">
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
              userOnline ? "border-green-500" : "border-gray-400"
            }`}
          >
            <Image
              src={userAvatar}
              alt={`${author}'s avatar`}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          {userOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black"></div>
          )}
        </div>
        <div className="ml-3 flex-1">
          <div className="flex items-baseline justify-between">
            <h4 className="font-semibold text-white">{author}</h4>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>

      {/* Post Images */}
      {images && images.length > 0 && (
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src={images[0]}
              alt={title}
              width={600}
              height={600}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleImageClick(0)}
            />
          </div>
          {images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded-md text-xs text-white">
              +{images.length - 1}
            </div>
          )}
        </div>
      )}

      {/* Post Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-2 whitespace-pre-line">
          {displayContent}
          {shouldClipContent && !isTextExpanded && (
            <span
              className="text-blue-400 cursor-pointer hover:underline ml-1"
              onClick={() => setIsTextExpanded(true)}
            >
              Read more
            </span>
          )}
        </p>

        {/* Social Stats */}
        {!hideInteractions && (
          <div className="mt-4 border-t border-white/10 pt-3">
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Reactions
                  onReaction={handleReaction}
                  onRemove={handleRemoveReaction}
                  currentReaction={userReaction}
                />
                <span>
                  {Object.values(reactions).reduce((a, b) => a + b, 0)}
                </span>
              </div>

              <button
                onClick={handleCommentClick}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>💬</span> {comments}
              </button>

              <button
                onClick={handleShareClick}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>↗️</span> {shares}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          postId={id}
          shareTitle={title} // Changed from postTitle to shareTitle
          shareUrl={`/blog/${id}`} // Added the missing shareUrl prop
          onClose={() => setIsShareModalOpen(false)}
          onShare={(shareType) => {
            onShare(id);
            setIsShareModalOpen(false);
          }}
        />
      )}
    </div>
  );
};
