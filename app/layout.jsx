import { ThemeSwitch, Layout, Navbar } from "nextra-theme-docs";
import { Head, Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const font = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata = {
  title: "Deebkit",
  description: "Deebkit — Lightweight JSON ACID Compliant Database written in Rust",
};

const banner = (
  <Banner storageKey="v0.0.11">
    🎉 <span className="font-bold">Deeb v0.0.11</span> released! Install with Cargo:{" "}
    <span className="bg-slate-900 px-1 rounded">cargo add deeb</span> 🎉
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <>
        <Image src="/logo.png" width={40} height={40} alt="Deeb Logo" />
        <b className="text-2xl">Deebkit</b>
      </>
    }
    projectLink="https://www.github.com/the-devoyage/deeb"
    chatLink="https://discord.gg/79zqTfVpex"
    children={<ThemeSwitch />}
  />
);
const footer = (
  <>
    <footer className="flex justify-center items-center bg-white dark:bg-slate-950 p-6">
      MIT {new Date().getFullYear()} © Deebkit.
    </footer>
  </>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={font.className}>
      <Head backgroundColor={{ dark: "#020618", light: "#fff" }}>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.deebkit.com/logo.png"></meta>
        <meta property="twitter:title" content="Deebkit — Lightweight JSON ACID Compliant Database written in Rust" />
        <meta
          property="twitter:description"
          content="Deeb is a JSON backed ACID Compliant Database written in Rust for creators, small projects, internal tooling, and rapid prototyping."
        />
        <meta property="og:image" content={"https://www.deebkit.com/logo.png"} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:site_name" content="Deebkit" />
        <meta property="og:title" content="Deebkit — Lightweight JSON ACID Compliant Database written in Rust"/>
        <meta property="og:description" content="JSON Backed ACID Compliant Database written in Rust" />
        <meta property="og:url" content="https://deebkit.com" />
        <link rel="canonical" href="https://deebkit.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/The-Devoyage/deebkit/tree/main"
          footer={footer}
        >
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
