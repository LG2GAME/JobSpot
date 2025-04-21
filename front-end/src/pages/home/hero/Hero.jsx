import { Link } from "react-router-dom";

import "./Hero.scss";
import learningPanaImage from "@assets/images/learning-pana.png";

export const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <h1 className="hero-text">
        <span className="hero-text hero-text--orange">Znalezienie pracy</span>,
        nigdy nie było tak łatwe.
      </h1>
      <p className="side-text">
        Prosty proces aplikacji i dostęp do najlepszych ofert pracy – znajdź
        idealną posadę w mgnieniu oka!
      </p>
      <div className="hero__content-buttons">
        <Link to="/" className="btn btn-white">
          Dołącz za darmo!
        </Link>
        <Link to="/career" className="btn btn-w30 button-text">
          Znajdź pracę
        </Link>
      </div>
    </div>
    <div className="hero__image">
      <img src={learningPanaImage} alt="" />
    </div>
  </section>
);
