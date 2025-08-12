import Link from "next/link";
import { getPosts, getTags } from "./get-posts";
import { EmailSignupForm, PostCard } from "../components";

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
    <div className="flex flex-col mx-auto max-w-4xl mt-4 space-y-4 p-4">
      {/* Email Signup */}
      <EmailSignupForm />

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        data-pagefind-ignore="all"
      >
        {/* Tags Section */}
        <div className="h-full flex flex-col border-2 border-indigo-900 rounded p-4 col-span-full">
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

        {posts.map((post, i) => (
          <div key={post.route}>
            <PostCard post={post} isNew={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
