'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NewsData } from '@/lib/types';

interface NewsArticleViewProps {
  news: NewsData;
}

export default function NewsArticleView({ news }: NewsArticleViewProps) {
  const [isJapaneseVisible, setIsJapaneseVisible] = useState<boolean[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    if (news) {
      setIsJapaneseVisible(Array(news.content.length).fill(false));
    }
  }, [news]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-tooltip-trigger]') === null) {
        setActiveTooltip(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleJapaneseVisibility = (index: number) => {
    setIsJapaneseVisible((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 py-4 text-2xl font-bold">{news.title.english}</h1>
      <h2 className="px-4 pb-4 text-xl">{news.title.japanese}</h2>

      <div className="space-y-8 px-4 pb-4">
        {news.content.map((line, lineIndex) => (
          <div key={lineIndex}>
            <p className="pb-2 text-lg">
              {line.segments.map((segment, segmentIndex) => {
                const nextSegment = line.segments[segmentIndex + 1];
                const nextIsPunctuation =
                  nextSegment && /^[.,!?;:'"]/.test(nextSegment.text);
                const tooltipId = `${lineIndex}-${segmentIndex}`;
                const isTooltipActive = activeTooltip === tooltipId;

                return (
                  <React.Fragment key={segmentIndex}>
                    <span
                      data-tooltip-trigger
                      className={`rounded ${
                        segment.translation
                          ? 'group hover:bg-hover relative cursor-pointer'
                          : 'cursor-default'
                      }`}
                      onClick={() => {
                        if (segment.translation) {
                          setActiveTooltip((prev) =>
                            prev === tooltipId ? null : tooltipId,
                          );
                        }
                      }}
                    >
                      <span
                        className={
                          segment.translation
                            ? 'border-b-2 border-dotted border-gray-400 group-hover:border-solid group-hover:border-blue-500'
                            : 'border-b-2 border-transparent'
                        }
                      >
                        {segment.text}
                      </span>
                      {segment.translation && (
                        <span
                          className={`absolute bottom-full z-10 mb-2 w-max max-w-xs rounded bg-gray-800 px-3 py-1 text-sm text-white shadow-lg ${
                            isTooltipActive ? 'block' : 'hidden'
                          } md:group-hover:block`}
                        >
                          {segment.translation}
                        </span>
                      )}
                    </span>
                    {segmentIndex < line.segments.length - 1 &&
                      !nextIsPunctuation &&
                      ' '}
                  </React.Fragment>
                );
              })}
            </p>
            <div
              className="cursor-pointer rounded bg-gray-100 p-2 hover:bg-gray-200"
              onClick={() => toggleJapaneseVisibility(lineIndex)}
            >
              <p className="text-center text-sm text-gray-500">
                ▼ 日本語訳を見る
              </p>
            </div>
            {isJapaneseVisible[lineIndex] && (
              <div className="mt-2 rounded bg-gray-50 p-4">
                <p className="text-base text-gray-800">{line.japanese}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="px-4 py-8">
        <Link href="/news" className="text-blue-600 hover:underline">
          Back to News List
        </Link>
      </div>
    </div>
  );
}
