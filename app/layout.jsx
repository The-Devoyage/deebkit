import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Space_Mono } from 'next/font/google'
import Image from 'next/image';
import './globals.css'

const font = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap', 
})

export const metadata = {
  title: 'deeb',
  description: 'Lightweight Rust database',
}

// const banner = <Banner storageKey="some-key">Deebkit 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<>
      <Image src="/logo.png" width={50} height={50} alt="Deeb Logo" />
      <b className="text-3xl">Deebkit</b></>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Deebkit.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      className={font.className}
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
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
  )
}
