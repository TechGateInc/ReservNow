import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating({ value }) {
  const maxRating = 5;
  const filledStars = Math.floor(value);
  let hasHalfStar = value % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < filledStars) {
        stars.push(<AiFillStar key={i} />);
      } else if (hasHalfStar) {
        stars.push(<AiOutlineStar key={i} />);
        hasHalfStar = false; // Render only one half star
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
}