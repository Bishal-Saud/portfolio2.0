import { NextResponse } from "next/server";
import { Article } from "../../../model/article_model.js";
import mongoose from "mongoose";

// Connect to MongoDB
await mongoose.connect(process.env.DB_URL);

// CORS middleware function
function allowCors(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization"
  );

  // If it's an OPTIONS request, send a 200 response to indicate CORS preflight success
  if (req.method === "OPTIONS") {
    return NextResponse.done();
  }
}

export async function GET(req) {
  // Call the CORS middleware
  allowCors(req, res);

  let data = [];
  try {
    data = await Article.find();
    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  // Call the CORS middleware
  allowCors(req, res);

  try {
    const payload = await req.json();
    const data = new Article({
      title: payload.title,
      description: payload.description,
      image: payload.image,
    });
    const result = await data.save();
    return NextResponse.json(
      { success: true, result: result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
