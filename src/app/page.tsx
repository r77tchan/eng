import Link from "next/link";

const learningSections = [
  {
    title: "Learn by Reading",
    bgColor: "bg-red1",
    button: {
      text: "Go to Book List",
      href: "/book",
      bgColor: "bg-red2",
      disabled: false,
    },
  },
  {
    title: "Learn by Typing",
    bgColor: "bg-blue1",
    button: {
      text: "Coming Soon",
      href: "",
      bgColor: "bg-blue2",
      disabled: true,
    },
  },
  {
    title: "Learn by News",
    bgColor: "bg-green1",
    button: {
      text: "Go to News List",
      href: "/news",
      bgColor: "bg-green2",
      disabled: false,
    },
  },
];

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="p-4 text-2xl font-bold">My English Learning Website</h1>
      <p className="px-4 pb-4">
        It&apos;s still in the testing phase, but I hope to release it publicly
        in the future.
      </p>
      <div className="grid grid-cols-1 gap-8 pb-4 lg:grid-cols-2">
        {learningSections.map((section) => (
          <div
            key={section.title}
            className={`${section.bgColor} rounded text-center outline`}
          >
            <h2 className="px-4 py-8 text-2xl font-bold">{section.title}</h2>
            {section.button.disabled ? (
              <span
                className={`${section.button.bgColor} mb-12 inline-block cursor-not-allowed rounded border px-8 py-4 font-bold`}
              >
                {section.button.text}
              </span>
            ) : (
              <Link
                href={section.button.href}
                className={`${section.button.bgColor} hover:bg-hover mb-12 inline-block rounded border px-8 py-4 font-bold transition-all duration-75 hover:shadow-lg`}
              >
                {section.button.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
