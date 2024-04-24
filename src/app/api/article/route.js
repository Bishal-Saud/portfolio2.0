import { NextResponse } from "next/server";
import { Article } from "../../../model/article_model.js";
import mongoose from "mongoose";
await mongoose.connect(process.env.DB_URL);
export async function GET() {
  let data = [];
  try {
    data = await Article.find();
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: "working fine ", data: data },
    { status: 200 }
  );
}

export async function POST(req) {
  const payload = await req.json();
  const data = new Article({
    title: payload.title,
    description: payload.description,
    image: payload.image,
  });
  // console.log(data);
  const result = await data.save();
  return NextResponse.json(
    {
      success: true,
      result,
    },
    { status: 200 }
  );
}
