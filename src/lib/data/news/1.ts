import { NewsData } from "../../types";

export const news1: NewsData = {
    id: 1,
    title: {
      english: "New Discovery in Space",
      japanese: "宇宙での新発見",
      segments: [
        { text: "New", translation: "新しい" },
        { text: " " },
        { text: "Discovery", translation: "発見" },
        { text: " in " },
        { text: "Space", translation: "宇宙" },
      ],
    },
    content: [
      {
        english:
          "Scientists have discovered a new planet that could potentially support life.",
        japanese:
          "科学者たちは、生命を維持できる可能性のある新しい惑星を発見しました。",
        segments: [
          { text: "Scientists", translation: "科学者" },
          { text: " have " },
          { text: "discovered", translation: "発見した" },
          { text: " a new " },
          { text: "planet", translation: "惑星" },
          { text: " that could " },
          { text: "potentially", translation: "潜在的に" },
          { text: " " },
          { text: "support", translation: "支える" },
          { text: " " },
          { text: "life", translation: "生命" },
          { text: "." },
        ],
      },
    ],
  };