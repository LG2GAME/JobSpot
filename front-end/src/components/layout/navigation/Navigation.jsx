import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);

  const Burger = () => (
    <div className="burger" onClick={() => setExpandedMenu(!expandedMenu)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <div className="navigation">
      <p className="navigation__logo">
        <Link to="/">JobSpot</Link>
      </p>
      <Burger />
      <nav
        className={`navigation__menu ${
          expandedMenu ? "navigation__menu--expanded" : ""
        }`}
      >
        <ul>
          <li className="navigation__menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/">Kariera</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/">Blog</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/">O nas</Link>
          </li>
        </ul>
        <ul>
          <Link to="/" className="btn btn-white button-text button-text--navy">
            Login
          </Link>
          <Link to="/" className="btn btn-w30">
            Rejestracja
          </Link>
        </ul>
      </nav>
    </div>
  );
};
