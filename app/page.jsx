import Image from "next/image";
import { StarButton, CodeBlock, Button } from "./components";

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pb-6">
        <Image src="/logo.png" width={400} height={400} alt="Deeb Logo" />
        <h1 className="text-black dark:text-slate-400 text-5xl font-bold mb-4">
          Meet <span className="text-indigo-500">deeb</span>
        </h1>
        <CodeBlock
          language="rust"
          code={`use deeb::Deeb;\n\n#[derive(Collection)\nstruct User {...}\n\nlet db = Deeb::new().add_instance(...);\nlet user = User::find_one(db, query, transaction);`}
        />
        <p className="text-lg my-6 max-w-xl">
          A lightweight, zero-setup, embedded, ACID compliant JSON database for Rust developers.
          Perfect for CLIs, prototypes, and internal tools.
        </p>
        <div className="flex gap-4 mb-6">
          <a href="https://discord.gg/79zqTfVpex" target="_blank">
            <Button outline>Discord</Button>
          </a>

          <a href="/docs/quickstart">
            <Button>Quick Start</Button>
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-500 dark:bg-slate-900 text-center text-slate-200">
        <h2 className="text-slate-200 text-3xl font-bold mb-4">
          A database... without the database.
        </h2>
        <p className="mb-8">
          Use <span className="font-semibold">deeb</span> when you just need simple local data done
          right.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">Simple Setup</h3>
            <p>Forget configuring Postgres or Mongo. Just import and go.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">JSON ORM</h3>
            <p>Work directly with JSON data—no schema migrations needed.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">Embeddable</h3>
            <p>Use deeb inside CLI tools, servers, or local apps effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-6 text-center bg-white dark:bg-slate-950">
        <h2 className="text-3xl font-bold mb-10 text-slate-700 dark:text-white">
          Why Developers Love deeb
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-slate-300">
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🦀 Rust-native</h3>
            <p>Built with and for Rust developers.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">⚡ Zero Setup</h3>
            <p>Just point to a file path and start saving.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">📁 JSON Store</h3>
            <p>Use flexible JSON objects—no schemas needed.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🖥️ Tooling</h3>
            <p>Use from code, as a hosted server(soon!), or command-line(soon!).</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🌱 Lightweight</h3>
            <p>Perfect for microservices, tools, and one-off scripts.</p>
          </div>
          <div className="rounded-md bg-slate-600 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🔌 Embeddable</h3>
            <p>Drop it into any Rust app with a few lines.</p>
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section
        id="get-started"
        className="py-16 px-6 bg-slate-500 dark:bg-slate-900 text-slate-300"
      >
        <h2 className="text-3xl font-bold text-center mb-6">How to Use deeb</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="rounded-md bg-slate-700 p-4 shadow w-full md:w-1/2">
            <h3 className="font-bold mb-2">📦 Install</h3>
            <CodeBlock language="bash" code={`cargo add deeb`} />
          </div>
          <div className="rounded-md bg-slate-700 p-4 shadow w-full md:w-1/2">
            <h3 className="font-bold mb-2">🧠 Embedded Rust</h3>
            <CodeBlock
              language="rust"
              code={`db.find_many(&Entity::new("User"), Query::All, None).await?;`}
            />
          </div>
        </div>
        <div className="pt-10 flex items-center justify-center">
          <a href="/docs/quickstart">
            <Button>Get Started Now</Button>
          </a>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-slate-500 dark:text-slate-200 text-3xl font-bold mb-10">
          How deeb compares
        </h2>
        <div className="overflow-x-auto rounded-lg shadow ring-1 ring-gray-200 dark:ring-gray-700">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-4 text-left font-semibold border-b border-gray-300 dark:border-gray-700"></th>
                <th className="p-4 text-center font-semibold border-b border-gray-300 dark:border-gray-700">
                  deeb
                </th>
                <th className="p-4 text-center font-semibold border-b border-gray-300 dark:border-gray-700">
                  SQLite
                </th>
                <th className="p-4 text-center font-semibold border-b border-gray-300 dark:border-gray-700">
                  MongoDB
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-300">
              <tr>
                <th className="p-4 text-left font-normal border-b border-gray-200 dark:border-gray-700">
                  Zero Setup
                </th>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">⚠️</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">❌</td>
              </tr>
              <tr>
                <th className="p-4 text-left font-normal border-b border-gray-200 dark:border-gray-700">
                  Rust-native
                </th>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">❌</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">❌</td>
              </tr>
              <tr>
                <th className="p-4 text-left font-normal border-b border-gray-200 dark:border-gray-700">
                  JSON-native
                </th>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">❌</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
              </tr>
              <tr>
                <th className="p-4 text-left font-normal border-b border-gray-200 dark:border-gray-700">
                  Embeddable
                </th>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">✅</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-10 text-center bg-slate-500 dark:bg-slate-900 text-slate-200">
        <h3 className="text-xl font-bold mb-2">Show some love!</h3>
        <p className="mb-6">Start embedding lightweight databases into your Rust apps today.</p>
        <StarButton />
      </footer>
    </main>
  );
}
