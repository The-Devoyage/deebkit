import Image from "next/image";
import { StarButton, CodeBlock, Button, EmailSignupForm } from "./components";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen px-6 pb-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full background-cta opacity-5 dark:opacity-30" />
          <div className="absolute inset-0 bg-white dark:bg-black opacity-60 pointer-events-none [mask-image:radial-gradient(circle, white 30%, transparent 100%)]" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full min-h-screen">
          <Image src="/logo.png" width={400} height={400} alt="Deeb Logo" />
          <h1 className="text-black dark:text-slate-400 text-5xl font-bold mb-4">
            Meet <span className="text-indigo-500">deeb</span>
          </h1>
          <div className="flex items-center justify-center p-4 w-full">
            <CodeBlock
              language="rust"
              code={`use deeb::Deeb;\n\n#[derive(Collection)\nstruct User { name: String, ... }\n\nlet db = Deeb::new().add_instance(...);\nlet user = User::find_one(db, query, transaction);`}
            />
          </div>
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
          <StarButton />
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-slate-100 text-center space-y-8">
        <h2 className="text-4xl font-bold tracking-tight">A database — without the database.</h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          <span className="font-semibold text-white">deeb</span> is your zero-config local data
          layer. Fast. Frictionless. JSON-native.
        </p>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-slate-800 p-6 shadow-sm border border-slate-700 text-left">
            <h3 className="text-xl font-semibold mb-2">⚡ Instant Setup</h3>
            <p className="text-slate-400">
              No Postgres. No config. Just import and start saving data.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6 shadow-sm border border-slate-700 text-left">
            <h3 className="text-xl font-semibold mb-2">🧬 JSON-Native</h3>
            <p className="text-slate-400">
              Use your data as JSON, skip the migrations, and keep full control.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6 shadow-sm border border-slate-700 text-left">
            <h3 className="text-xl font-semibold mb-2">📦 Fully Embeddable</h3>
            <p className="text-slate-400">
              Drop it into CLIs, servers, or apps — wherever your project lives.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="relative py-20 px-6 bg-white dark:bg-slate-950 space-y-8 overflow-hidden">
        {/* Background shape */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -skew-y-8 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 opacity-20 dark:opacity-20 pointer-events-none"
        ></div>

        <h2 className="relative text-3xl font-bold text-center text-gray-900 dark:text-gray-100 z-10">
          The Deeb Dive
        </h2>

        <div className="relative flex justify-center z-10">
          <ul className="text-gray-600 dark:text-gray-300 space-y-3 text-left max-w-md">
            <li>🧰 New tools, libraries, and frameworks</li>
            <li>🚀 Tips from real solo builders</li>
            <li>📦 Deep dives into projects that inspire</li>
            <li>🧪 Experiments worth trying this weekend</li>
          </ul>
        </div>

        <div className="relative px-6 md:px-48 pt-6 z-10">
          <EmailSignupForm
            // callout={
            //   <div className="text-lg w-full text-gray-700 dark:text-gray-300 max-w-lg">
            //     <Callout type="info">
            //       A weekly email for indie devs building personal, weird, and wonderful projects.
            //     </Callout>
            //   </div>
            // }
          />
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-6 text-center bg-slate-500 dark:bg-slate-900">
        <h2 className="text-3xl font-bold mb-10 text-slate-200">Why Developers Love deeb</h2>
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
      <section id="get-started" className="py-16 px-6 dark:bg-slate-950">
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
      <section className="py-20 px-6 text-center bg-slate-500 dark:bg-slate-900">
        <h2 className="text-slate-200 dark:text-slate-200 text-3xl font-bold mb-10">
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
      <footer className="py-10 text-center dark:bg-slate-950 px-4">
        <h3 className="text-xl font-bold mb-2">Show some love!</h3>
        <p className="mb-6">Start embedding lightweight databases into your Rust apps today.</p>
        <StarButton />
      </footer>
    </main>
  );
}
