import React from "react";
import GridList from "./GridList";

export default function GridListExample() {
  const items = [
    { title: "Item 1", description: "This is the description for item 1." },
    { title: "Item 2", description: "This is the description for item 2." },
    { title: "Item 3", description: "This is the description for item 3." },
    { title: "Item 4", description: "This is the description for item 4." },
    { title: "Item 5", description: "This is the description for item 5." },
    { title: "Item 6", description: "This is the description for item 6." },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-5xl">
        <GridList items={items} />
      </div>
    </div>
  );
}
