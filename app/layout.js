import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineScript";
import "animate.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taib Islam | Web Developer Portfolio of Taib Islam Dipu",
  description:
    "Web Developer, with experience in NEXT JS, REACT, NODE JS, and MongoDB. Proficient in JavaScript-based projects, focusing on full-stack applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
