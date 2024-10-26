import React from "react";
import Accordion from "./Accordion";

export default function AccordionExample() {
  const accordionItems = [
    {
      title: "Section 1",
      content:
        "lorem ipsum dolor sit amet con laoreet d adipiscing el aspect et accus iaculis tell tell et accus iaculis tell et accus iaculis tell et accus iaculis tell",
    },
    {
      title: "Section 2",
      content:
        "lorem ipsum dolor sit amet con laoreet d adipiscing el aspect et accus iaculis tell tell et accus iaculis tell et accus iaculis tell et accus iaculis tell",
    },
    {
      title: "Section 3",
      content:
        "lorem ipsum dolor sit amet con laoreet d adipiscing el aspect et accus iaculis tell tell et accus iaculis tell et accus iaculis tell et accus iaculis tell",
    },
  ];
  return (
    <div className="p-6">
      <Accordion items={accordionItems} />
    </div>
  );
}
