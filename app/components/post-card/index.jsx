import Link from "next/link";

// interface Post {
//   name: string;
//   route: string;
//   title: string;
//   type: string;
//   frontMatter: {
//     author: string;
//     date: string;
//     description: string;
//     image: string;
//     tags: string[];
//     timestamp: number;
//     title: string;
//   };
// }

export function PostCard({ post, isNew }) {
  const { route, frontMatter } = post;
  const { title, description, date, author, image, tags } = frontMatter;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-shadow h-full">
      <Link href={route}>
        <div className="relative aspect-[16/9] bg-gray-100 dark:bg-neutral-900 overflow-hidden">
          {isNew && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-3 py-1 rounded-sm shadow-lg shadow-pink-500/30">
              New!
            </div>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>
        </div>
      </Link>

      <div className="p-3">
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>By {author}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="inline-block bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 text-xs rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-700"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
