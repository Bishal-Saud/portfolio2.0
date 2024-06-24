"use server";
import path from "path";
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

async function savePhotosToLocal(formData) {
  const file = formData.get("file");

  if (!file) {
    throw new Error("No file uploaded");
  }

  const data = await file.arrayBuffer();
  const buffer = Buffer.from(data);
  const name = uuidv4();
  const ext = file.type.split("/")[1];

  const tempDir = os.tmpdir();
  const uploadDir = path.join(tempDir, `${name}.${ext}`);

  await fs.writeFile(uploadDir, buffer);
  return { filePath: uploadDir, filename: file.name };
}

async function uploadPhotosToCloudinary(newFiles) {
  try {
    return await cloudinary.v2.uploader.upload(newFiles.filePath, {
      folder: "nextjs_upload",
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
    throw new Error("Cloudinary upload failed");
  } finally {
    // Clean up the local file
    await fs.unlink(newFiles.filePath);
  }
}

export default async function uploadPhoto(formData) {
  try {
    const title = formData.get("title");
    const description = formData.get("description");

    const newFiles = await savePhotosToLocal(formData);
    const photo = await uploadPhotosToCloudinary(newFiles);

    const newArticleData = new Article({
      title,
      description,
      image: {
        public_id: photo.public_id,
        secure_url: photo.secure_url,
      },
    });

    await Article.insertMany(newArticleData);
    return { success: true, message: "Photo saved successfully!" };
  } catch (error) {
    console.error("Error uploading photo:", error.message);
    console.error("Stack trace:", error.stack);
    return {
      success: false,
      message: "Failed to upload photo",
      error: error.message,
    };
  }
}
