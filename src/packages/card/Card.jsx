import React from "react";

const Card = ({ title = "title", description = "lorem ipsum" }) => {
  const handleShare = () => {
    // Share functionality (you can customize this)
    alert(`Sharing: ${title}`);
  };

  return (
    <div className="rounded w-1/2 min-w-fit overflow-hidden shadow-lg bg-white p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <button
        onClick={handleShare}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Share
      </button>
    </div>
  );
};

export default Card;
