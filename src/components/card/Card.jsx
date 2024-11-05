import React from "react";

const Card = ({
  title = "title",
  description = "This is a modern card component with a share button. It features a clean design with a title, description text, and an interactive share button. The card has subtle hover effects and smooth transitions.",
}) => {
  const handleShare = () => {
    // Share functionality (you can customize this)
    alert(`Sharing: ${title}`);
  };

  return (
    <div className="rounded-xl w-1/2 min-w-fit overflow-hidden shadow-2xl bg-white p-6 hover:shadow-3xl transition-all duration-300 border border-gray-100">
      <div className="font-bold text-2xl mb-3 text-gray-800 tracking-tight">
        {title}
      </div>
      <p className="text-gray-600 text-base mb-6 leading-relaxed">
        {description}
      </p>
      <button
        onClick={handleShare}
        className="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>
    </div>
  );
};

export default Card;
