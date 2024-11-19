import React, { useState } from "react";

const Accordion = ({
  items,
  accordionStyle = "w-full mx-auto max-w-full",
  buttonStyle = "w-full text-left py-4 px-6 bg-white hover:bg-black hover:text-white focus:outline-none transition-colors duration-300 rounded-2xl",
  titleStyle = "font-semibold",
  svgStyle = "w-5 h-5 transform transition-transform duration-300",
  pathStyle = "strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}",
  contentStyle = "px-6 py-4 text-gray-600 bg-white rounded-2xl",
  activeContentStyle = "max-h-40",
  inactiveContentStyle = "max-h-0",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={accordionStyle}>
      {items.map((item, index) => (
        <div key={index} className="my-2 ">
          <button
            onClick={() => toggleAccordion(index)}
            className={buttonStyle}
          >
            <div className="flex justify-between items-center">
              <span className={titleStyle}>{item.title}</span>
              <svg
                className={`${svgStyle} ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? activeContentStyle : inactiveContentStyle
            }`}
          >
            <div className={contentStyle}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
