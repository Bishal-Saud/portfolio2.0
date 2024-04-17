"use server";
import path, { resolve } from "path";
import fs from "fs/promises";
import os from "os";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "cloudinary";
import { Article } from "@/model/article_model";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

async function savePhotosToLocal(file) {
  if (!file) {
    throw new Error("No file uploaded");
  }

  const data = await file.arrayBuffer();
  const buffer = Buffer.from(data);
  const name = uuidv4();
  const ext = file.type.split("/")[1];

  const uploadDir = path.join(process.cwd(), "public", `/${file.name}`);
  // console.log(uploadDir);
  fs.writeFile(uploadDir, buffer);

  return { filePath: uploadDir, filename: file.name };
}
async function uploadPhotosToCloudinary(newFiles) {
  return cloudinary.v2.uploader.upload(newFiles.filePath, {
    folder: "nextjs_upload",
  });
}

export default async function uploadPhoto(formData) {
  // Retrieve title and description from FormData
  const title = formData.get("title");
  const description = formData.get("description");
  const file = formData.get("file"); // Assuming only one file is uploaded

  const newFiles = await savePhotosToLocal(file);
  const photo = await uploadPhotosToCloudinary(newFiles);
  const newArticleData = new Article({
    title: title,
    description: description,
    image: {
      public_id: photo.public_id,
      secure_url: photo.secure_url,
    },
  });

  try {
    await newArticleData.save(); // Save the new Data object to MongoDB
    return { message: "Photo saved successfully!" };
  } catch (error) {
    console.error("Error saving photo:", error);
    throw new Error("Failed to save photo to MongoDB");
  }
}
