"use client";
import { FRONTEND_URL } from "@/untill/frontEnd_Url";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArticlePage({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const { articlesId: id } = params;

  useEffect(() => {
    fetchArticleDetails();
  }, [id]);

  const fetchArticleDetails = async () => {
    try {
      const response = await fetch(`${FRONTEND_URL}/api/article/${id}`);
      const result = await response.json();

      if (result.success) {
        const data = result.data;
        setTitle(data.title);
        setDescription(data.description);
        setExistingImage(data.image?.secure_url || "");
      }
    } catch (error) {
      console.error("Error fetching article details:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const updateArticle = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (image) {
        formData.append("file", image);
      }

      const response = await fetch(`${FRONTEND_URL}/api/article/${id}`, {
        method: "PUT",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Article Updated Successfully");
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="min-h-screen m-5 text-dark dark:text-light">
      <h2 className="font-bold mt-10 text-6xl md:text-2xl text-center">
        Update Article Details
      </h2>
      <div className="flex items-center m-auto border border-[#2020202a] p-6 h-2/3 w-1/2 mt-10 flex-col gap-2 justify-center shadow-dark dark:shadow-light lg:w-full shadow-md">
        <form>
          <div className="flex flex-col gap-4">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              className="p-2 mb-5 text-2xl text-dark dark:text-light bg-light dark:bg-dark rounded-md w-[40rem] lg:w-full sm:text-sm h-[5rem] dark:border-light dark:border"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              className="resize-none p-2 w-[40rem] lg:w-full sm:text-sm h-[10rem] text-dark dark:text-light bg-light dark:bg-dark dark:border"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="image" className="font-semibold">
              Upload your image
            </label>
            <input
              className="p-2 w-[40rem] lg:w-full sm:text-sm h-[5rem] text-dark dark:text-light bg-light dark:bg-dark"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {existingImage && (
              <img
                src={existingImage}
                alt="Current article image"
                className="mt-4 w-full max-h-64 object-cover"
              />
            )}
          </div>
        </form>
        <div className="flex gap-4 mt-10">
          <button
            className="bg-gray-300 dark:bg-light dark:text-dark hover:bg-gray-400 dark:hover:text-light dark:hover:bg-dark dark:hover:border text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={updateArticle}
          >
            Update
          </button>
          <Link
            className="underline opacity-80 hover:opacity-100 text-gray-800 dark:text-light font-bold py-2 px-4 rounded inline-flex items-center"
            href="/articles"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
