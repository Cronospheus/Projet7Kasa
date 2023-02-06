import React, { FunctionComponent } from "react";

type Props = {
  cover: string;
  title: string;
};

const Card: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.cover} alt={props.title} className="card_image" />
        <h2 className="card_title">{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
