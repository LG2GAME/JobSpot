import { Link } from "react-router-dom";
import * as style from "./authNavigation.css";
import { useNavigationHeight } from "@hooks/useNavbarHeight";

const AuthNavigation = () => {
  const navRef = useNavigationHeight();

  return (
    <nav ref={navRef} className={style.navigation} aria-label="Nawigacja">
      <Link to="/" className={style.logo}>
        JobSpot
      </Link>
    </nav>
  );
};

export default AuthNavigation;
