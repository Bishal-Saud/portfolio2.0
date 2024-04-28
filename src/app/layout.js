import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import HireMe from "@/Components/HireMe";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bishal Saud",
  description: "Personal Portfolio Showcase !",
};

export default function RootLayout({ children, className = "" }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className={`w-full min-h-screen bg-light dark:bg-dark ${className}`}
        >
          <Navbar />
          {children}
          <HireMe />
          <Footer />
        </main>
      </body>
    </html>
  );
}
