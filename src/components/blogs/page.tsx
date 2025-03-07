// components/BlogSection.tsx
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

interface BlogCardProps {
  images: string[];
  title: string;
  excerpt: string;
  date: string;
}

// data/blogData.ts
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  images: string[];
  author: string;
  tags: string[];
  content: string;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Next.js: A Comprehensive Guide",
    excerpt: "Discover advanced techniques for building scalable applications with Next.js. Learn about SSR, SSG, and API routes.",
    date: "2024-03-15",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3"
    ],
    author: "Sarah Johnson",
    tags: ["Web Development", "Next.js", "TypeScript"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  },
  {
    id: 2,
    title: "The Future of Web Development: 2024 Trends",
    excerpt: "Explore the latest trends shaping web development, from AI integration to WebAssembly advancements.",
    date: "2024-03-14",
    images: [
      "https://picsum.photos/600/400?random=4",
      "https://picsum.photos/600/400?random=5",
      "https://picsum.photos/600/400?random=6"
    ],
    author: "Michael Chen",
    tags: ["Technology", "Trends", "Web Development"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Clean Code",
    excerpt: "Learn how to write maintainable and type-safe code with these TypeScript pro tips.",
    date: "2024-03-13",
    images: [
      "https://picsum.photos/600/400?random=7",
      "https://picsum.photos/600/400?random=8",
      "https://picsum.photos/600/400?random=9"
    ],
    author: "Emma Wilson",
    tags: ["TypeScript", "Programming", "Best Practices"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  },
  // Add more entries as needed
  {
    id: 4,
    title: "Responsive Design with Tailwind CSS",
    excerpt: "Create beautiful responsive layouts using Tailwind CSS utility-first approach.",
    date: "2024-03-12",
    images: [
      "https://picsum.photos/600/400?random=10",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12"
    ],
    author: "David Martinez",
    tags: ["CSS", "Tailwind", "Frontend"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Essential tips for creating web applications that are accessible to everyone.",
    date: "2024-03-11",
    images: [
      "https://picsum.photos/600/400?random=13",
      "https://picsum.photos/600/400?random=14",
      "https://picsum.photos/600/400?random=15"
    ],
    author: "Linda Thompson",
    tags: ["Accessibility", "Web Standards", "Inclusion"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  },
  {
    id: 6,
    title: "Modern Frontend Architecture Patterns",
    excerpt: "Explore different architectural approaches for large-scale frontend applications.",
    date: "2024-03-10",
    images: [
      "https://picsum.photos/600/400?random=16",
      "https://picsum.photos/600/400?random=17",
      "https://picsum.photos/600/400?random=18"
    ],
    author: "Robert Williams",
    tags: ["Architecture", "Frontend", "Scalability"],
    content: "Lorem ipsum dolor sit amet... (full article content)"
  }
];

const BlogCard = ({ images, title, excerpt, date }: BlogCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll logic
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll, images.length]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true
  });

  return (
    <div 
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      {/* Image Carousel */}
      <div 
        {...handlers}
        className="relative h-64 w-full overflow-hidden"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Blog visual ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{date}</span>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// Blog Section Wrapper
export const BlogSection = () => {
  return (
    <section className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace the map function with: */}
          {BLOG_DATA.map((blog) => (
            <BlogCard
              key={blog.id}
              images={blog.images}
              title={blog.title}
              excerpt={blog.excerpt}
              date={new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};