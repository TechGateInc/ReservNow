import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

export function Rating({ value }) {
  const maxRating = 5;
  const filledStars = Math.floor(value);
  let hasHalfStar = value % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < filledStars) {
        stars.push(
          <BsStarFill
            key={i}
            style={{ marginRight: "5px", color: "#ffbb40" }}
          />
        );
      } else if (hasHalfStar) {
        stars.push(
          <BsStarHalf
            key={i}
            style={{ marginRight: "5px", color: "#ffbb40" }}
          />
        );
        hasHalfStar = false; // Render only one half star
      } else {
        stars.push(
          <BsStar key={i} style={{ marginRight: "5px", color: "#ffbb40" }} />
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
}
