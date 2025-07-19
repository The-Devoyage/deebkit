import { CodeBlock } from "./components/code-block"
import Image from "next/image";
import { StarButton } from "./components/star-button";

export default function HomePage() {
  return (
    <main className="dark:!bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pb-6">
        <Image src="/logo.png" width={400} height={400} alt="Deeb Logo" />
        <h1 className="text-slate-700 dark:text-white text-5xl font-bold mb-4">Meet <span className="text-primary">deeb</span></h1>
        <CodeBlock language="rust" code={`let db = Deeb::new().add_instance(...)?;\n\ndb.insert(\n    &Entity::new("User"),\n    json!({ "name": "Alice" }), \n    transaction\n).await?;`} />
        <p className="text-lg my-6 max-w-xl">
          A lightweight, zero-setup, embedded, ACID compliant JSON database for Rust developers. Perfect for CLIs, prototypes, and internal tools.
        </p>
        <div className="flex gap-4 mb-6">
          <a className="btn btn-primary" href="https://github.com/The-Devoyage/deeb" target="_blank">GitHub</a>
          <a className="btn btn-outline btn-primary" href="#get-started">Get Started</a>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-6 bg-slate-400 dark:bg-base-200 text-center">
        <h2 className="text-3xl font-bold mb-4">A database... without the database.</h2>
        <p className="mb-8">Use <span className="font-semibold">deeb</span> when you just need simple local data done right.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">Simple Setup</h3>
            <p>Forget configuring Postgres or Mongo. Just import and go.</p>
          </div>
          <div className="card bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">JSON ORM</h3>
            <p>Work directly with JSON data—no schema migrations needed.</p>
          </div>
          <div className="card bg-slate-600 dark:bg-base-100 shadow-md p-4">
            <h3 className="font-bold mb-2">Embeddable</h3>
            <p>Use deeb inside CLI tools, servers, or local apps effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-700 dark:text-white">Why Developers Love deeb</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🦀 Rust-native</h3>
            <p>Built with and for Rust developers.</p>
          </div>
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">⚡ Zero Setup</h3>
            <p>Just point to a file path and start saving.</p>
          </div>
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">📁 JSON Store</h3>
            <p>Use flexible JSON objects—no schemas needed.</p>
          </div>
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🖥️ Tooling</h3>
            <p>Use from code, as a hosted server(soon!), or command-line(soon!).</p>
          </div>
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🌱 Lightweight</h3>
            <p>Perfect for microservices, tools, and one-off scripts.</p>
          </div>
          <div className="card bg-slate-400 dark:bg-base-200 p-4 shadow">
            <h3 className="font-bold">🔌 Embeddable</h3>
            <p>Drop it into any Rust app with a few lines.</p>
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section id="get-started" className="py-16 px-6 bg-slate-400 dark:bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-6">How to Use deeb</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="card bg-slate-700 p-4 shadow w-full md:w-1/2">
            <h3 className="font-bold mb-2">📦 Install</h3>
            <CodeBlock language="bash" code={`cargo add deeb`} />
          </div>
          <div className="card bg-slate-700 p-4 shadow w-full md:w-1/2">
            <h3 className="font-bold mb-2">🧠 Embedded Rust</h3>
            <CodeBlock language="rust" code={`db.find_many(&Entity::new("User"), Query::All, None).await?;`} />
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 px-6 text-center bg-slate-600">
        <h2 className="text-3xl font-bold mb-10">How deeb compares</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>deeb</th>
                <th>SQLite</th>
                <th>MongoDB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Zero Setup</th>
                <td>✅</td>
                <td>⚠️</td>
                <td>❌</td>
              </tr>
              <tr>
                <th>Rust-native</th>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <th>JSON-native</th>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <th>Embeddable</th>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-10 text-center bg-slate-400 dark:bg-base-200">
        <h3 className="text-xl font-bold mb-2">Ready to try deeb?</h3>
        <p className="mb-4">Start embedding lightweight databases into your Rust apps today.</p>
        <StarButton />
      </footer>
    </main>
  );
}
