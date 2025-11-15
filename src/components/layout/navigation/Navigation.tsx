import { Link } from "react-router-dom";
import * as style from "./navigation.css";
import { Button } from "@components/common";
import MenuToggle from "./MenuToggle";
import { useMobileNavigation } from "@hooks/useMobileNavigation";
import { useNavigationHeight } from "@hooks/useNavbarHeight";

const Navigation = () => {
  const navRef = useNavigationHeight();
  const { isOpen, isMobile, toggleMenu, handleMenu } = useMobileNavigation();

  return (
    <nav ref={navRef} className={style.navigation} aria-label="Navigation">
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
          <Link to="/career">Kariera</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Link to="/about-us">O nas</Link>
        </li>
        <li className={style.menuItem} onClick={handleMenu}>
          <Button to="/account">Konto</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
