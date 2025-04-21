import { Link } from "react-router-dom";

import { useWindowWidth } from "@hooks/useWindowWidth";

import "./Help.scss";
import mcImage from "@assets/images/multiple-choice.png";

export const Help = () => {
  const innerWidth = useWindowWidth();

  return (
    <section className="help">
      <div className="help__content">
        <h1 className="header">
          Pomożemy ci znaleźć {innerWidth >= 1200 ? <br /> : null}
          <span className="header--orange">wymarzoną pracę!</span>
        </h1>
        <p className="card-side-text">
          Nasza platforma jest stworzona z myślą o Tobie. Dzięki łatwej
          nawigacji, intuicyjnemu interfejsowi i systemowi rekomendacji,
          zaoszczędzisz czas na przeszukiwanie ofert. Niezależnie od branży,
          znajdziesz oferty, które pasują do Twoich umiejętności. Dołącz do nas
          i rozwijaj swoją karierę już teraz!
        </p>
        <p className="card-side-text">
          Każda oferta pracy jest starannie weryfikowana, co zapewnia Ci dostęp
          do najlepszych ofert dostępnych na rynku. Nasze narzędzia wspierają
          Cię na każdym etapie poszukiwania pracy, od aplikacji po rozmowę
          kwalifikacyjną. Jesteśmy z Tobą na każdym kroku!
        </p>
        <div className="hero__content-buttons">
          <Link to="/career" className="btn btn-b30">
            Zaczynajmy
          </Link>
          <Link to="/" className="btn btn-orange">
            Dodaj swoje CV
          </Link>
        </div>
      </div>
      <div className="help__image">
        <img src={mcImage} alt="" />
      </div>
    </section>
  );
};
