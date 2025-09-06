import { newsData } from "@/lib/data/news";
import { NewsData, Line } from "@/lib/types";
import { notFound } from "next/navigation";
import React from "react";

import NewsArticleView from "@/components/NewsArticleView";

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
}

async function getNews(id: string) {
  const news = newsData.find((news) => news.id.toString() === id);
  if (!news) {
    notFound();
  }
  return news;
}

export default async function Page({ params }: { params: { id: string } }) {
  const news = await getNews(params.id);

  return <NewsArticleView news={news} />;
}
