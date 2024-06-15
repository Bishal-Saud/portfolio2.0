import { NextResponse } from "next/server";
import { Article } from "../../../model/article_model.js";
import mongoose from "mongoose";
let isConnected;

async function connectToDatabase() {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
      throw new Error("Database connection failed");
    }
  }
}
export async function GET() {
  await connectToDatabase();

  try {
    const data = await Article.find();
    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// // export async function POST(req) {
//   try {
//     const payload = await req.json();
//     const data = new Article({
//       title: payload.title,
//       description: payload.description,
//       image: payload.image,
//     });
//     // console.log(data);
//     const result = await data.save();
//     return NextResponse.json(
//       {
//         success: true,
//         result,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//   }

// }
