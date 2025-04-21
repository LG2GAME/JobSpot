import { Link } from "react-router-dom";

import { CardContainer } from "@components/common/cards/CardContainer";

import "./Footer.scss";
import fbIcon from "@assets/images/facebook.png";
import instaIcon from "@assets/images/instagram.png";
import inIcon from "@assets/images/linkedin.png";
import ytIcon from "@assets/images/youtube.png";

export const Footer = () => (
  <footer className="footer">
    <CardContainer>
      <div className="footer-item">
        <p className="footer-logo">
          <Link to="/">JobSpot</Link>
        </p>
        <p className="button-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
          velit at erat ullamcorper fringilla.
        </p>
        <p className="button-text">Obserwuj nas na</p>
        <div className="footer-socials">
          <Link to="/">
            <img src={fbIcon} alt="" />
          </Link>
          <Link to="/">
            <img src={instaIcon} alt="" />
          </Link>
          <Link to="/">
            <img src={inIcon} alt="" />
          </Link>
          <Link to="/">
            <img src={ytIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className="footer-item">
        <p className="footer-item-header">Nawigacja</p>
        <Link to="/" className="button-text">
          Home
        </Link>
        <Link to="/career" className="button-text">
          Kariera
        </Link>
        <Link to="/blog" className="button-text">
          Blog
        </Link>
        <Link to="/about-us" className="button-text">
          O Nas
        </Link>
      </div>
      <div className="footer-item">
        <p className="footer-item-header">Pomoc</p>
        <Link to="/" className="button-text">
          Regulamin
        </Link>
        <Link to="/" className="button-text">
          Polityka prywatności
        </Link>
        <Link to="/" className="button-text">
          Pliki cookies
        </Link>
      </div>
      <div className="footer-item">
        <p className="footer-item-header">Kontakt</p>
        <p className="button-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="button-text">Nowy York</p>
        <p className="button-text">123 456 789</p>
        <p className="button-text">jobspotlocal@gmail.com</p>
      </div>
    </CardContainer>
    <hr />
    <div className="footer-more">
      <p className="button-text">COPYRIGHT © 2024 AstroCode </p>
      <p className="button-text">Designed by AstroCode.pl</p>
    </div>
  </footer>
);
