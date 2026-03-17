import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
         style={{
  cursor: "pointer",
  color: star <= rating ? "#FFD700" : "#ccc",
  fontSize: "22px",
  margin: "2px"
}}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;