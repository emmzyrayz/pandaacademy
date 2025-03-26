import { InstagramStyleFeed } from "./page";


export default function SocialFeed() {
  return (
    <main className="min-h-screen bg-black pt-4">
      <div className="text-white text-xl font-bold px-4 pb-2 flex justify-between items-center max-w-md mx-auto">
        <div>EduGram</div>
        <div className="flex gap-4">
          <span>🔔</span>
          <span>✉️</span>
        </div>
      </div>

      <InstagramStyleFeed useInfiniteScroll={true} />

      {/* Instagram-style bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-3">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <span className="text-xl text-white">🏠</span>
          <span className="text-xl text-white">🔍</span>
          <span className="text-xl text-white">➕</span>
          <span className="text-xl text-white">❤️</span>
          <span className="text-xl text-white">👤</span>
        </div>
      </div>
    </main>
  );
}