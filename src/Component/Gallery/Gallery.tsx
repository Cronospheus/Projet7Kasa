import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  pictures: Array<string>;
  title: string;
};

const picture: FunctionComponent<Props> = (props) => {
  const [pictures, setPictures] = useState(props.pictures);
  const [title, setTitle] = useState(props.title);
  const [pictureActive, setPictureActive] = useState(0);

  const [count, setCount] = useState(1);
  const CountPictures = pictures.length + 1;

  const nextSlide = () => {
    setPictureActive(
      pictureActive === pictures.length - 1 ? 0 : pictureActive + 1
    );
    setCount(count === CountPictures - 1 ? 1 : count + 1);
  };

  const prevSlide = () => {
    setPictureActive(
      pictureActive === 0 ? pictures.length - 1 : pictureActive - 1
    );
    setCount(count === 1 ? CountPictures - 1 : count - 1);
  };

  const DisplayChevron = () => {
    if (pictures.length > 1) {
      return (
        <>
          <button>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={prevSlide}
              className="ChevronLeft"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={nextSlide}
              className="ChevronRight"
            />
          </button>
          <div className="CountPicture">
            {count}/{pictures.length}
          </div>
        </>
      );
    }
  };

  return (
    <div className="Carousel">
      {DisplayChevron()}

      <div className="pictureCarousel">
        <img
          className="pictureCarouselDetail"
          src={pictures[pictureActive]}
          alt={title}
        />
      </div>
    </div>
  );
};

export default picture;
