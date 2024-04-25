"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const id = props.params.articlesId;

  useEffect(() => {
    // Fetch article details when component mounts
    articleDetails();
  }, []);

  const articleDetails = async () => {
    try {
      // let result = await fetch(`http://localhost:3000/api/article/${id}`);
      // deployment
      let result = await fetch(`${process.env.FRONTEND_URL}api/article/${id}`);
      result = await result.json();
      if (result.success) {
        let data = result.data;
        // Set state variables to fetched data manual
        setTitle(data.title);
        setDescription(data.description);
        setImage(data.image);
      }
    } catch (error) {
      console.error("Error fetching article details:", error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
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

      console.log(formData, "formData");
      let result = await fetch(`${process.env.FRONTEND_URL}api/article/${id}`, {
        method: "PUT",
        body: formData,
      });
      result = await result.json();
      if (result.success) {
        alert("Article Updated");
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full m-5 text-dark dark:text-light  ">
        <h2 className=" font-bold mt-10 text-6xl text-center">
          Update Article Details
        </h2>
        <div className="flex items-center m-auto border border-[#2020202a] p-6 h-2/3 w-1/2 mt-10 flex-col gap-2 justify-center shadow-dark dark:shadow-light  shadow-md ">
          <form>
            <div className="flex flex-col  gap-4">
              <label htmlFor="title" className="font-semibold  ">
                Title{" "}
              </label>
              <input
                className="p-2 mb-5 text-2xl text:dark dark:text-light bg-light dark:bg-dark rounded-md w-[40rem] h-[5rem] dark:border-light dark:border"
                type="text"
                name="title"
                value={title} // Set input value to state variable
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your title"
              />
            </div>
            <div className="flex flex-col  gap-4 ">
              <label htmlFor="description" className="font-semibold mr-5 ">
                Description{" "}
              </label>
              <textarea
                className="resize-none p-2 w-[40rem] h-[10rem] dark:text-light bg-light dark:bg-dark dark:border"
                type="text"
                name="description"
                value={description} // Set input value to state variable
                placeholder="Enter your description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col  mt-4">
              <label htmlFor="image" className="font-semibold ">
                Upload your image
              </label>
              <input
                className="p-2 w-[40rem] h-[5rem] dark:text-light bg-light dark:bg-dark "
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
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
              {" "}
              Back to Article
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
