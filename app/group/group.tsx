import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontPeace, fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
      icon: "/favicon.ico",
      shortcut: "/logo-1.png",
      apple: "/logo-1.png",
    },
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" suppressHydrationWarning className="bg-[#0B0D21]">
        <head />
        <body
          className={clsx(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            fontPeace.variable
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="mx-auto flex-grow w-full">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    );
  }
  