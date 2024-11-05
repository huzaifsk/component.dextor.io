import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto max-w-full">
      {items.map((item, index) => (
        <div key={index} className="my-2 ">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 px-6 bg-white hover:bg-black hover:text-white focus:outline-none transition-colors duration-300 rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
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
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 text-gray-600 bg-white rounded-2xl">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
