import { newsData } from "@/lib/data/news";
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

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const news = await getNews(id);

  return <NewsArticleView news={news} />;
}
