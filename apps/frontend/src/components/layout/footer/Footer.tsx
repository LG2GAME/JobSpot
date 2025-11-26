import { icon } from "@assets/icons";
import * as style from "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footerTop}>
        <div className={style.footerColumn}>
          <h4 className={style.logo}>JobSpot</h4>
          <p>
            Nowoczesna platforma dla osób poszukujących pracy oraz firm, które
            szukają talentów.
          </p>
          <p>Obserwuj nas na</p>
          <div className={style.socialWrapper}>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <img className={style.social} src={icon.facebook} alt="" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <img className={style.social} src={icon.instagram} alt="" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img className={style.social} src={icon.linkedin} alt="" />
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <img className={style.social} src={icon.youtube} alt="" />
            </a>
          </div>
        </div>
        <nav className={style.footerColumn} aria-label="Nawigacja">
          <h5 className={style.header}>Nawigacja</h5>
          <ul className={style.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/career">Kariera</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about-us">O nas</Link>
            </li>
          </ul>
        </nav>
        <nav className={style.footerColumn} aria-label="Pomoc">
          <h5 className={style.header}>Pomoc</h5>
          <ul className={style.list}>
            <li>
              <Link to="/terms">Regulamin</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Polityka prywatności</Link>
            </li>
            <li>
              <Link to="/cookies">Pliki cookies</Link>
            </li>
          </ul>
        </nav>
        <div className={style.footerColumn}>
          <h5 className={style.header}>Kontakt</h5>
          <ul className={style.list}>
            <li className={style.contactItem}>
              <img src={icon.gps} alt="" />
              Nowy York
            </li>
            <li className={style.contactItem}>
              <img src={icon.phone} alt="" />
              123 456 789
            </li>
            <li className={style.contactItem}>
              <img src={icon.email} alt="" />
              someemail@random.com
            </li>
          </ul>
        </div>
      </section>
      <div className={style.footerDivider}></div>
      <section className={style.footerBottom}>
        <p>COPYRIGHT &copy; 2024 AstroCode </p>
        <p>Designed by AstroCode.pl</p>
      </section>
    </footer>
  );
};

export default Footer;
