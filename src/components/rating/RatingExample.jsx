import React from "react";
import Rating from "./Rating";

function RatingExample() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md pt-44">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Basic Rating</h3>
        <Rating maxRating={5} onRatingChange={(value) => console.log(value)} />
      </div>

      <div className="w-full max-w-md py-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Small Rating</h3>
        <Rating
          maxRating={5}
          size="sm"
          onRatingChange={(value) => console.log(value)}
        />
      </div>

      <div className="w-full max-w-md py-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Large Rating</h3>
        <Rating
          maxRating={5}
          size="lg"
          onRatingChange={(value) => console.log(value)}
        />
      </div>

      <div className="w-full max-w-md py-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Rating with Initial Value
        </h3>
        <Rating
          maxRating={5}
          initialRating={3}
          onRatingChange={(value) => console.log(value)}
        />
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Disabled Rating
        </h3>
        <Rating
          maxRating={5}
          initialRating={4}
          disabled={true}
          onRatingChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default RatingExample;
