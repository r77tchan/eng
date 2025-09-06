import { NewsData } from "../../types";

export const news2: NewsData = {
    id: 2,
    title: {
      english: "Tech Giant Releases New Gadget",
      japanese: "巨大テック企業が新ガジェットをリリース",
      segments: [
        { text: "Tech", translation: "技術" },
        { text: " " },
        { text: "Giant", translation: "巨大企業" },
        { text: " " },
        { text: "Releases", translation: "発表する" },
        { text: " New " },
        { text: "Gadget", translation: "ガジェット" },
      ],
    },
    content: [
      {
        english:
          "The latest gadget from the leading tech company is now available worldwide.",
        japanese:
          "大手テック企業の最新ガジェットが、世界中で発売されました。",
        segments: [
          { text: "The " },
          { text: "latest", translation: "最新の" },
          { text: " " },
          { text: "gadget", translation: "ガジェット" },
          { text: " from the " },
          { text: "leading", translation: "主要な" },
          { text: " tech " },
          { text: "company", translation: "会社" },
          { text: " is now " },
          { text: "available", translation: "入手可能" },
          { text: " " },
          { text: "worldwide", translation: "世界中で" },
          { text: "." },
        ],
      },
    ],
  };