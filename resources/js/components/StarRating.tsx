import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value?: number;
  max?: number;
}

export function StarRating({ value = 5, max = 5 }: StarRatingProps) {
  return (
    <div
      className="inline-flex items-center gap-0.5"
      aria-label={`Rating ${value} dari ${max}`}
    >
      {Array.from({ length: max }, (_, idx) => {
        const starIndex = idx + 1;
        const filled = starIndex <= Math.round(value);

        return (
          <Star
            key={starIndex}
            className={`h-3.5 w-3.5 ${
              filled
                ? 'fill-amber-400 text-amber-400'
                : 'fill-transparent text-slate-300'
            }`}
          />
        );
      })}
    </div>
  );
}
