import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="containerPageNotFound">
      <h1 className="Error404">404</h1>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLinkApartments">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default PageNotFound;
