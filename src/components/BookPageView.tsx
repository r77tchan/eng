"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// --- DATA STRUCTURES ---
interface Segment {
  text: string;
  translation?: string;
}

interface Line {
  english: string;
  japanese: string;
  segments: Segment[];
}

interface Page {
  page: number;
  content: Line[];
}

interface BookData {
  id: number;
  title: string;
  pages: Page[];
}
// --- END DATA STRUCTURES ---

interface BookPageViewProps {
  bookData: BookData;
  pageData: Page;
  params: { id: string; page: string };
}

export default function BookPageView({ bookData, pageData, params }: BookPageViewProps) {
  const [isJapaneseVisible, setIsJapaneseVisible] = useState<boolean[]>([]);

  useEffect(() => {
    if (pageData) {
      setIsJapaneseVisible(Array(pageData.content.length).fill(false));
    }
  }, [pageData]);

  const toggleJapaneseVisibility = (index: number) => {
    setIsJapaneseVisible((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const currentPage = pageData.page;
  const totalPages = bookData.pages.length;

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 pt-4 text-2xl font-bold">{bookData.title}</h1>
      <h2 className="px-4 pt-2 text-xl">Page {pageData.page}</h2>

      <div className="px-4 pt-6 space-y-8">
        {pageData.content.map((line, lineIndex) => (
          <div key={lineIndex}>
            <p className="text-lg">
              {line.segments.map((segment, segmentIndex) => {
                const nextSegment = line.segments[segmentIndex + 1];
                const nextIsPunctuation = nextSegment && /^[.,!?;:'"]/.test(nextSegment.text);

                return (
                  <React.Fragment key={segmentIndex}>
                    <span
                      className={`rounded ${
                        segment.translation
                          ? "group relative cursor-pointer hover:bg-yellow-100"
                          : "cursor-default"
                      }`}
                    >
                      <span
                        className={
                          segment.translation
                            ? "border-b-2 border-dotted border-gray-400 group-hover:border-solid group-hover:border-blue-500"
                            : "border-b-2 border-transparent"
                        }
                      >
                        {segment.text}
                      </span>
                      {segment.translation && (
                        <span className="absolute bottom-full mb-2 hidden w-max max-w-xs group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-3 shadow-lg z-10">
                          {segment.translation}
                        </span>
                      )}
                    </span>
                    {segmentIndex < line.segments.length - 1 && !nextIsPunctuation && ' '}
                  </React.Fragment>
                );
              })}
            </p>
            <div
              className="mt-2 cursor-pointer bg-gray-100 hover:bg-gray-200 p-2 rounded"
              onClick={() => toggleJapaneseVisibility(lineIndex)}
            >
              <p className="text-center text-sm text-gray-500">▼ 日本語訳を見る</p>
            </div>
            {isJapaneseVisible[lineIndex] && (
              <div className="mt-2 p-4 bg-gray-50 rounded">
                <p className="text-base text-gray-800">{line.japanese}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between px-4 pt-8 mt-8 border-t">
        {currentPage > 1 ? (
          <Link href={`/book/${bookData.id}/${currentPage - 1}`} className="text-blue-600 hover:underline">
            &larr; Previous Page
          </Link>
        ) : (
          <div />
        )}
        {currentPage < totalPages ? (
          <Link href={`/book/${bookData.id}/${currentPage + 1}`} className="text-blue-600 hover:underline">
            Next Page &rarr;
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="px-4 pt-8">
        <Link href={`/book/${bookData.id}`} className="text-blue-600 hover:underline">Back to Table of Contents</Link>
      </div>
    </div>
  );
}