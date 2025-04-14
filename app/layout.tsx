import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins font
const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

// Tab title, description & favicon
export const metadata: Metadata = {
  title: "CodeMinds",
  description: "A Agency operated website",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  
};

// Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
