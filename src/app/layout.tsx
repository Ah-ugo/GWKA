import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/inter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gratefulness Wonderland Kids Academy",
  description: "Welcome to Gratefulness Wonderland Kids Academy, where every child's journey begins with gratitude and wonder! Located in the heart of Owerri, Imo State, our premier educational institution offers a nurturing environment for children to thrive academically, socially, and emotionally. With a holistic approach to education, we empower young minds through personalized learning, innovative curriculum, and dedicated educators. Join us at C/19 Imo Power layout, Ebenezer Plaza, Naze, and discover a place where curiosity meets creativity, and every child is celebrated for their unique gifts and talents. Enroll your child at Gratefulness Wonderland Kids Academy today, and let's embark on a journey of learning, growth, and endless possibilities.",
  // icons: {
  //   icon: require("../assets/images/logo2.png"),
  //   apple: require("../assets/images/logo2.png")
  // }
  icons: [
    { rel: 'icon', url: "/favicon.ico", sizes: '32x32' },
    { rel: 'apple-touch-icon', url: "/favicon.ico", sizes: '180x180' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/> */}
      </head>
      <body className={inter.className} style={{fontFamily: 'Inter',}}>
      {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/> */}
      {children}</body>
    </html>
  );
}
