import React, { FunctionComponent, useState, useEffect } from "react";
import ImgAboutMobile from "./img/image_about_mobile.png";
import ImgAboutDesktop from "./img/image_about.png";
import Collapse from "../Component/Collapse/Collapse";

const About: FunctionComponent = () => {
  return (
    <div>
      <div className="banner">
        <img
          className="img_about_mobile"
          src={ImgAboutMobile}
          alt="Image_about_mobile"
        />
        <img
          className="img_about_desktop"
          src={ImgAboutDesktop}
          alt="Image_about_desktop"
        />
      </div>
      <div className="CollapseItem">
        <Collapse
          titleCollapse="Fiabilité"
          textCollapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
        />
        <Collapse
          titleCollapse="Respect"
          textCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          titleCollapse="Service"
          textCollapse="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          titleCollapse="Sécurité"
          textCollapse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};

export default About;
