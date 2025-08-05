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
    <div
      className="flex flex-col md:flex-row max-w-4xl mx-auto px-4 py-10 space-y-10 gap-4"
      data-pagefind-ignore="all"
    >

      {/* Tags Section */}
      <div className="flex flex-col border-2 border-indigo-900 rounded p-4">
        <h2 className="text-2xl mb-2">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(allTags).map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-block bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {tag} <span className="text-xs text-gray-500">({count})</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.route} className="space-y-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
