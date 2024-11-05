import React from "react";
import GridList from "./GridList";

export default function GridListExample() {
  const items = [
    {
      title: "Modern Design",
      description:
        "Clean and minimalist approach with attention to visual hierarchy and whitespace.",
      icon: "✨",
    },
    {
      title: "Responsive Layout",
      description:
        "Fully adaptive design that looks great on all devices and screen sizes.",
      icon: "📱",
    },
    {
      title: "Smooth Animations",
      description:
        "Subtle motion design that enhances the user experience and engagement.",
      icon: "🎯",
    },
    {
      title: "Dark Mode",
      description:
        "Eye-friendly dark theme option for comfortable viewing in low light.",
      icon: "🌙",
    },
    {
      title: "Performance",
      description:
        "Lightning fast load times and optimized rendering for smooth interactions.",
      icon: "⚡",
    },
    {
      title: "Accessibility",
      description:
        "Built with web standards to ensure everyone can use your application.",
      icon: "♿",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* <div className="mx-auto px-4 py-8"> */}
      <GridList items={items} />
      {/* </div> */}
    </div>
  );
}
