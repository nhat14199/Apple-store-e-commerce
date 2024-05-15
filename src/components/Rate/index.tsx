import React, { useState } from "react";

interface RatingProps {
  onChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ onChange }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingClick = (rating: number) => {
    setSelectedRating((prevRating) => {
      // Nếu người dùng nhấp vào đánh giá đã chọn, ta sẽ xóa bỏ đánh giá đó
      if (prevRating === rating) {
        onChange(0); // Thông báo rằng không có đánh giá được chọn
        return null;
      } else {
        onChange(rating);
        return rating;
      }
    });
  };

  return (
    <div className="text-left pl-2">
      <h4 className="text-sm">Đánh giá:</h4>
      <div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <Star
            key={rating}
            selected={selectedRating !== null && rating <= selectedRating}
            onClick={() => handleRatingClick(rating)}
          />
        ))}
      </div>
    </div>
  );
};

interface StarProps {
  selected: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => {
  return <span onClick={onClick}>{<span >{selected ? "★" : "☆"}</span>}</span>;
};

export default Rating;
