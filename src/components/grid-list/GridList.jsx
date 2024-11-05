import React from "react";

const GridList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 p-4 md:p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm hover:-translate-y-1"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {item.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridList;
