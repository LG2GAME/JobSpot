import { Link } from "react-router-dom";
import * as style from "./navigation.css";
import { Button } from "@components/common";
import MenuToggle from "./MenuToggle";
import { useMobileNavigation } from "@hooks/useMobileNavigation";

const Navigation = () => {
  const { isOpen, isMobile, toggleMenu, handleMenu } = useMobileNavigation();

  return (
    <nav className={style.navigation} aria-label="Navigation">
      <Link to="/" className={style.logo}>
        JobSpot
      </Link>
      <MenuToggle
        className={style.menuToggle}
        onClick={toggleMenu}
        ariaExpanded={isOpen}
        ariaControls="nav-menu"
        ariaLabel="Toggle navigation"
      />
      <ul
        id="nav-menu"
        className={style.menu({ isOpen: isMobile ? isOpen : true })}
        aria-hidden={isMobile && !isOpen}
      >
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/">Career</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/">Blog</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/">About us</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Button to="/">Account</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
