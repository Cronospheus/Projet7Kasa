import React, { FunctionComponent, useState } from "react";
import Vector from "./img/Vector.png";
import VectorEmpty from "./img/VectorEmpty.png";

type Props = {
  rating: string;
};

const stars: FunctionComponent<Props> = (props) => {
  const [star, setStars] = useState(props.rating);
  const starRating = parseInt(star);
  const stars = [];
  const EmptyStarNumber = 5 - starRating;

  for (let i = 0; i < starRating; i++) {
    stars.push(<img className="star" src={Vector} />);
  }

  for (let i = 0; i < EmptyStarNumber; i++) {
    stars.push(<img className="star" src={VectorEmpty} />);
  }

  return (
    <div className="stars">
      {stars.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </div>
  );
};

export default stars;
