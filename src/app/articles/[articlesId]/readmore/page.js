"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page(res) {
  const article_ID = res.params.articlesId;

  return (
    <div>
      <h2>Read More {article_ID} </h2>
    </div>
  );
}
