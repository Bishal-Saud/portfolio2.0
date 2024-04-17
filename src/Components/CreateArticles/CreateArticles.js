"use client";
import { useRef, useState } from "react";
import uploadPhoto from "@/Actions/uploadAction";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Initialize image state as null
  const formRef = useRef();

  const articleDetails = async (e) => {
    e.preventDefault();
    // let res = await fetch("http://localhost:3000/api/article", {
    //   method: "POST",
    //   body: JSON.stringify({ title, description, image }),
    // });
    // res = await res.json();
    // if (res.success) {
    //   alert("New article Added");
    // }

    const formData = new FormData(formRef.current);
    formData.append("file", image); // Append the selected file to FormData
    formData.append("title", title); // Append the title
    formData.append("description", description); // Append the description

    try {
      const res = await uploadPhoto(formData);
      console.log(res.message); // Log the response message
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setImage(file);
  };

  const imageUpload = async (e) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file", image); // Append the selected file to FormData

      try {
        const res = await uploadPhoto(formData);
        console.log("Image uploaded. Path:", res.filePath);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

  return (
    <div className=" z-10 flex items-center justify-center fixed  bg-[#00000043] w-full h-full top-0">
      <div className="flex items-center justify-center">
        <form
          ref={formRef}
          className="border relative w-full text-dark bg-light  border-dark flex flex-col items-center justify-center gap-2 p-5"
        >
          <h2 className="font-bold text-4xl py-5">Create Article</h2>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold">
              Your Title{" "}
            </label>
            <input
              className="p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
              type="text"
              placeholder="Enter your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="font-semibold">
              Your Description{" "}
            </label>
            <textarea
              className="p-2 h-28 w-full bg-light resize-none shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col cursor-pointer ">
            <label htmlFor="thumbnail" className="font-semibold ">
              Upload Thumbnail
            </label>
            <input
              className="p-2  cursor-pointer  bg-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
              type="file"
              accept="image/*"
              onChange={handleImageChange} // Handle file selection
            />
          </div>
          <button
            onClick={articleDetails}
            className="p-2  bg-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
