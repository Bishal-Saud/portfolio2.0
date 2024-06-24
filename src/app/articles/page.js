"use client";
import AnimatedText from "@/Components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import demoImg from "../../../public/images/projects/blog.png";
import Link from "next/link";
import { motion } from "framer-motion";
import CreateArticle from "@/Components/CreateArticles/CreateArticles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CrossIcon from "@/Components/Icons";
import DeleteArticle from "@/Components/DeleteArticle/deleteArticle";
import { BentoGrid } from "@/Components/ui/bento-grid";
import { cn } from "@/untill/cn";
import { FRONTEND_URL } from "@/untill/frontEnd_Url";

const fetchArticleData = async () => {
  try {
    const res = await fetch(`${FRONTEND_URL}/api/article`, {
      method: "GET",
      cache: "no-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

const BentoGridItem = ({ className, title, description, id, icon }) => {
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/articles/${id}`, { scroll: false });
  };

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-2">
        <DeleteArticle id={id} />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 lg:overflow-scroll">
        <Image
          src={icon || demoImg}
          width={1000}
          height={100}
          priority
          alt={title}
        />
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans my-5 font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="flex gap-2 justify-between items-end">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleArticleClick}
          >
            Edit
          </button>
          <Link
            href={`/articles/${id}`}
            className="text-blue-800 font-semibold underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ArticlesPage() {
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [articleData, setArticleData] = useState([]);

  const toggleCreateArticle = () => {
    setShowCreateArticle(!showCreateArticle);
  };
  const fetchArticles = async () => {
    const articles = await fetchArticleData();
    setArticleData(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Head>
        <title>Bishal | Article Page</title>
        <meta
          name="description"
          content="Browse through our collection of articles"
        />
      </Head>
      <main className="min-h-screen w-full flex flex-col items-center py-20 text-dark dark:text-light">
        {showCreateArticle && <CreateArticle />}
        <div className="flex items-center justify-center">
          <AnimatedText
            text="Our Articles"
            className="!text-6xl !mt-10 lg:!mt-0 lg:!text-4xl"
          />
          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="absolute shadow-sm shadow-dark dark:shadow-light right-40 p-2 lg:right-5 lg:top-10"
            onClick={toggleCreateArticle}
          >
            Add New Article
          </motion.button>
        </div>

        {articleData.length === 0 ? (
          <>
            <p>
              Not Found <span className=" text-red-400">Try Again !</span>
            </p>
          </>
        ) : (
          <>
            <BentoGrid className="max-w-4xl mx-auto">
              {articleData.map((article, i) => (
                <BentoGridItem
                  key={article._id}
                  id={article._id}
                  title={article.title}
                  description={article.description}
                  icon={article?.image?.secure_url || demoImg}
                  className={i === 3 || i === 6 ? "xl:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </>
        )}
      </main>
    </>
  );
}
