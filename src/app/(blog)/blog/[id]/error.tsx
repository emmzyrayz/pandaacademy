// app/blog/[id]/error.tsx
"use client";

export default function Error({error}: {error: Error}) {
  return (
    <div className="min-h-screen bg-black text-red-500 p-8">
      <h2>Could not load blog post!</h2>
      <p>{error.message}</p>
    </div>
  );
}
