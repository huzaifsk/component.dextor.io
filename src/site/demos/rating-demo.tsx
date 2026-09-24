import { useState } from "react";
import { Rating } from "../../components/ui/rating";

export default function RatingDemo() {
  const [value, setValue] = useState(3);
  return <Rating value={value} onValueChange={setValue} />;
}
