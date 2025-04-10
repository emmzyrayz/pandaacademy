// app/blog/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-gray-800 rounded w-3/4"></div>
        <div className="h-4 bg-gray-800 rounded w-1/4"></div>
        <div className="h-64 bg-gray-800 rounded"></div>
        {/* Add more skeleton elements */}
      </div>
    </div>
  );
}
