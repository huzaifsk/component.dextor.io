import React from "react";

const GridList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GridList;
