import { PostCard } from "nextra-theme-blog";
import { getPosts, getTags } from "../../posts/get-posts";

export async function generateMetadata({ params }) {
  return {
    title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`,
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map((tag) => ({ tag }));
}

export default async function TagPage({ params }) {
  const tag = decodeURIComponent(params.tag);
  // const title = `Posts Tagged with “${tag}”`;
  const posts = await getPosts();
  const filteredPosts = posts.filter((post) => post.frontMatter.tags?.includes(tag));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Posts Tagged with <span className="text-blue-600 dark:text-blue-400">“{tag}”</span>
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No posts found with this tag.</p>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.route} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
