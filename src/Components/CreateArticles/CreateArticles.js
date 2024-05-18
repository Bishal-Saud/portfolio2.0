"use client";
import { useRef, useState } from "react";
import uploadPhoto from "@/Actions/uploadAction";
import CrossIcon from "../Icons";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showCreateArticle, setShowCreateArticle] = useState(true);
  const formRef = useRef();

  const articleDetails = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("file", image);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const res = await uploadPhoto(formData);
      if (res && res.success) {
        alert(res.message);
      } else {
        alert(res ? res.message : "Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCrossIconClick = () => {
    setShowCreateArticle(false);
  };

  return (
    <div className="z-10 flex items-center justify-center fixed bg-[#00000043] text-dark dark:text-light w-full h-full top-0">
      <div className="flex items-center justify-center">
        <form
          ref={formRef}
          className="border relative sm:w-[80%] w-full text-dark dark:text-light bg-light dark:bg-dark shadow-2xl flex flex-col items-center justify-center gap-2 p-5 rounded-md"
        >
          <button
            className="absolute top-1 left-[93%]"
            onClick={handleCrossIconClick}
          >
            <CrossIcon />
          </button>
          <h2 className="font-bold text-4xl py-5">Create Article</h2>

          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold">
              Your Title
            </label>
            <input
              className="p-2 bg-light dark:bg-dark dark:shadow-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
              type="text"
              placeholder="Enter your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="font-semibold">
              Your Description
            </label>
            <textarea
              className="p-2 h-28 w-full bg-light resize-none shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2 rounded-sm"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col cursor-pointer w-full">
            <label htmlFor="thumbnail" className="font-semibold">
              Upload Thumbnail
            </label>
            <input
              className="p-2 cursor-pointer bg-light shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2 rounded-sm"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button
            onClick={articleDetails}
            className="p-2 dark:bg-dark dark:shadow-light bg-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
