/* eslint-disable @next/next/no-page-custom-font */
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Jonathan Nshuti",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Jura&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-black4" role="main">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
