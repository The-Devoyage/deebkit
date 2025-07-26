import Link from "next/link";
import { getPosts, getTags } from "./get-posts";
import { PostCard } from "../components";

export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const tags = await getTags();
  const posts = await getPosts();

  const allTags = Object.create(null);
  for (const tag of tags) {
    allTags[tag] ??= 0;
    allTags[tag] += 1;
  }

  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 py-10 space-y-10" data-pagefind-ignore="all">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{metadata.title}</h1>

      {/* Tags Section */}
      <h2 className="text-4xl">Tags</h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(allTags).map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="inline-block bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {tag} <span className="text-xs text-gray-500">({count})</span>
          </Link>
        ))}
      </div>

      {/* Posts Section */}
      <h2 className="text-4xl">Articles</h2>
      <div className="space-y-10">
        {posts.map((post) => (
          <div key={post.route} className="space-y-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
