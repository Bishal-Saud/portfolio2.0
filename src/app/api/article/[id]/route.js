import { Article } from "@/model/article_model.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
await mongoose.connect(process.env.DB_URL);

export async function PUT(req, res) {
  const articleID = res.params.id;
  const filter = { _id: articleID };
  const payload = await req.json();
  const article = await Article.findByIdAndUpdate(filter, payload);

  return NextResponse.json(
    {
      result: "User updated Successfully",
      success: true,
      data: article,
    },
    { status: 200 }
  );
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
