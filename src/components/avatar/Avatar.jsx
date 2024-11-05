import React from "react";

const Avatar = ({ images, names, limit = 4, size = "md" }) => {
  // Size classes mapping
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  // Calculate how many avatars to show and if we need a +X more indicator
  const visibleAvatars = images.slice(0, limit);
  const remainingCount = images.length - limit;
  const showRemaining = remainingCount > 0;

  return (
    <div className="flex items-center -space-x-2">
      {visibleAvatars.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image}
            alt={names[index]}
            className={`${sizeClasses[size]} rounded-full border-2 border-white object-cover hover:z-10 transition-all duration-200`}
          />
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
            {names[index]}
          </div>
        </div>
      ))}

      {showRemaining && (
        <div
          className={`${sizeClasses[size]} rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm font-medium text-gray-600`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default Avatar;
