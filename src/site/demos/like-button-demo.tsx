import { useState } from "react";
import { LikeButton } from "../../components/ui/like-button";

export default function LikeButtonDemo() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(128);

  return (
    <LikeButton
      liked={liked}
      count={count}
      onLikedChange={(next) => {
        setLiked(next);
        setCount((c) => c + (next ? 1 : -1));
      }}
    />
  );
}
