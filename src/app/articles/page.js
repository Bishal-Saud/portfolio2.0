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

const ArticleData = async () => {
  let res = await fetch("http://localhost:3000/api/article", {
    method: "GET",
    cache: "no-cache",
  });
  res = await res.json();
  return res.data;
};

const Article = ({ img, title, description, id }) => {
  const router = useRouter();
  function articleDataforEachID() {
    router.push(`/articles/${id}`, { scroll: false });
  }
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="relative bg-light p-2 h-full w-full cursor-pointer rounded-lg shadow-[#24232342] shadow-xl"
    >
      <div className="absolute right-0 bg-light p-2">
        <DeleteArticle id={id} />
      </div>
      <Image
        src={img}
        alt="article"
        className="rounded-md h-52 overflow-hidden"
        width={500}
        height={100}
        priority
      />
      <h2 className=" font-semibold py-5">{title}</h2>
      <div className="flex flex-col gap-2 font-mono py-4 h-40 mb-5 overflow-y-auto">
        <p className=" ">{description}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="border border-dark px-4 py-1"
          onClick={articleDataforEachID}
        >
          Edit
        </button>
        <Link href="/" className="hover:underline">
          Read More
        </Link>
      </div>
    </motion.div>
  );
};
const FeaturedArticle = ({ img, title, para1, para2 }) => {
  return (
    <div className=" bg-light p-2 h-full cursor-pointer w-full col-span-3 rounded-lg shadow-[#24232376] shadow-md">
      <Image src={img} className="rounded-md" alt="featuredArticle" priority />
      <h2 className=" font-semibold py-5">{title}</h2>
      <div className="flex flex-col gap-2 font-mono py-4 h-40 mb-5 overflow-y-auto">
        <p className=" ">{para1}</p>
        <p className=" ">{para2}</p>
      </div>
      <div className="flex justify-between">
        <button className="border border-dark px-4 py-1">Save</button>
        <Link href="/" className="hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default function Page() {
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [articleData, setArticleData] = useState([]);
  // Function to toggle visibility of CreateArticle component

  const toggleCreateArticle = () => {
    setShowCreateArticle(!showCreateArticle);
  };
  useEffect(() => {
    const fetchArticle = async () => {
      let articleD = await ArticleData();

      setArticleData(articleD);
    };
    fetchArticle();
  }, []);

  let image = articleData.map((data) => {
    return data?.image?.secure_url;
  });

  return (
    <>
      <Head>
        <title>Bishal \ Article Page</title>
        <meta name="article page" content="any description" />
      </Head>
      <main className="min-h-screen w-full flex flex-col items-center py-20">
        {showCreateArticle && <CreateArticle />}
        <div className="flex items-center justify-center">
          <AnimatedText text="Our Articles" className="!text-6xl mt-10" />
          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className=" absolute shadow-sm shadow-dark right-40 p-2"
            onClick={toggleCreateArticle}
          >
            Add New Article
          </motion.button>
        </div>

        <div className=" z-0 grid grid-cols-3 border mt-10 gap-10 h-full w-[80%]">
          {articleData ? (
            articleData?.map((article) => (
              <Article
                key={article._id}
                id={article._id}
                title={article.title}
                description={article.description}
                img={article?.image?.secure_url}
              />
            ))
          ) : (
            <>
              <FeaturedArticle
                title="What is backend"
                img={demoImg}
                para1="Backend is the part where we write logic part of web app."
                para2="Logics are written here"
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
