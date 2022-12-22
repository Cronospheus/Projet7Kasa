import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./homepage/home";
import About from "./aboutpage/about";
import AppartmentDetails from "./Appartment_details/Appartment_details";
import PageNotFound from "./page-not-found/page_not_found";
import imgHeader from "./img/logoHeader.jpg";
import imgFooter from "./img/logoFooter.png";
import "./style.css";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <Link to="/">
            <img className="logo_header" src={imgHeader} alt="logo_kasa" />
          </Link>
          <nav>
            <ul>
              <Link to="/">
                <li>Accueil</li>
              </Link>
              <Link to="/about">
                <li>A Propos</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments/:id" element={<AppartmentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <footer>
        <img className="logo_footer" src={imgFooter} alt="logo_kasa" />
        <p className="text_footer">© 2020 Kasa. All rights reserved</p>
      </footer>
    </Router>
  );
};

export default App;
