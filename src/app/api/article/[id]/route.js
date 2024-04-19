import { Article } from "@/model/article_model.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
await mongoose.connect(process.env.DB_URL);
import cloudinary from "cloudinary";
import { savePhotosToLocal } from "@/Actions/uploadAction";
import fs from "fs/promises";

await mongoose.connect(process.env.DB_URL);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
export async function PUT(req, res) {
  try {
    const articleID = res.params.id;
    const filter = { _id: articleID };

    const formData = await req.formData();
    // console.log(formData, "formData");
    const title = formData.get("title"); // Access form data using FormData methods
    const description = formData.get("description");
    const image = formData.get("file");
    const newFile = await savePhotosToLocal(image);

    // console.log(image);
    // If a new image is provided, upload it to Cloudinary

    const result = await cloudinary.v2.uploader.upload(newFile.filePath, {
      folder: "nextjs_upload",
    });

    // Update the article in the database
    const updatedArticle = await Article.findByIdAndUpdate(
      filter,
      {
        title: title,
        description: description,
        image: {
          public_id: result.public_id,
          secure_url: result.secure_url,
        },
      },
      { new: true }
    );

    await updatedArticle.save();

    // Remove the image from the local folder after successful upload
    await fs.unlink(newFile.filePath);
    return NextResponse.json(
      {
        result: "Article updated successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating article:", error);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req, res) {
  const articleId = res.params.id;
  //   console.log("articleId", articleId);
  const article = await Article.findById(articleId);
  return NextResponse.json(
    { success: true, id: articleId, data: article },
    { status: 200 }
  );
}

export async function DELETE(req, res) {
  const id = res.params.id;
  const filter = { _id: id };
  const article = await Article.findByIdAndDelete(filter);
  return NextResponse.json(
    {
      result: "User deleted Successfully",
      success: true,
    },
    { status: 200 }
  );
}
