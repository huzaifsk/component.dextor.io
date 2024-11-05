import React from "react";
import Avatar from "./Avatar";

function AvatarExample() {
  // Sample data for avatars
  const images = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ];

  const names = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Sarah Williams",
    "David Brown",
    "Emily Davis",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-700">Small Avatars</h3>
        <Avatar images={images} names={names} size="sm" limit={3} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-700">
          Medium Avatars (Default)
        </h3>
        <Avatar images={images} names={names} limit={4} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-700">Large Avatars</h3>
        <Avatar images={images} names={names} size="lg" limit={5} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-700">Show All Avatars</h3>
        <Avatar images={images} names={names} limit={6} />
      </div>
    </div>
  );
}

export default AvatarExample;
