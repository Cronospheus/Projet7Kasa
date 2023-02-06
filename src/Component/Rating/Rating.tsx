import React, { FunctionComponent } from "react";
import Vector from "./img/Vector.png";
import VectorEmpty from "./img/VectorEmpty.png";

type Props = {
  rating: number;
};

const Stars: FunctionComponent<Props> = (props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {stars.map((star) =>
        props.rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={Vector}
            alt="stars"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={VectorEmpty}
            alt="stars"
          />
        )
      )}
    </div>
  );
};

export default Stars;
