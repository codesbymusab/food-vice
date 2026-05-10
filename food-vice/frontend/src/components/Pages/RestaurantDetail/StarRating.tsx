import { useState } from "react";

function StarRating({ value, onChange, disabled }: { 
  value: number; 
  onChange: (val: number) => void; 
  disabled?: boolean 
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(star => (
        <span
          key={star}
          className={`cursor-pointer text-2xl transition-colors ${
            (hover || value) >= star ? "text-yellow-400" : "text-gray-300"
          } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={() => !disabled && onChange(star)}
          onMouseEnter={() => !disabled && setHover(star)}
          onMouseLeave={() => !disabled && setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
