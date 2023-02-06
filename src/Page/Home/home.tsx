import { FunctionComponent } from "react";
import ImgHomeDesktop from "./img/image_home.png";
import ImgHomeMobile from "./img/image_home_mobile.png";
import AppartmentCard from "../../Component/Appartment-card/Appartment-card";

const Home: FunctionComponent = () => {
  return (
    <div>
      <div className="banner">
        <img
          className="img_home_mobile"
          src={ImgHomeMobile}
          alt="Image_home_mobile"
        />
        <img
          className="img_home_desktop"
          src={ImgHomeDesktop}
          alt="Image_home_desktop"
        />
        <p className="text_banner">
          Chez vous,<span>partout et ailleurs</span>
        </p>
      </div>
      <AppartmentCard />
    </div>
  );
};

export default Home;
