import { Footer, Layout, Link, Navbar } from "nextra-theme-docs";
import { Head, Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const font = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata = {
  title: "deeb",
  description: "Lightweight Rust database",
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
        <b className="text-2xl text-slate-900 dark:text-white">Deebkit</b>
      </>
    }
    projectLink="https://www.github.com/the-devoyage/deeb"
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Deebkit.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={font.className}>
      <Head>{/* Your additional tags should be passed as `children` of `<Head>` element */}</Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
