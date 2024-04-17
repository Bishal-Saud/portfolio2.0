import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  { timestamps: true }
);

export const Article =
  mongoose.models.Articles || mongoose.model("Articles", articleSchema);
