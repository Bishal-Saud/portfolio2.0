import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import HireMe from "@/Components/HireMe";
// import { ThemeProvider } from "@material-tailwind/react";
// import  logo  from "../../public/images/personal/logoicon.png";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bishal Saud - Full Stack Web Developer",
  description: "Personal Portfolio Showcase !",
  icons: {
    icon: "../../public/images/personal/logoicon.png",
  },
};

export default function RootLayout({ children, className = "" }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <main
          className={`w-full min-h-screen bg-light dark:bg-dark ${className}`}
        >
          <Navbar />

          {children}
          <HireMe />
          <Footer />
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
