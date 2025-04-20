import { CardContainer } from "@components/common/cards/CardContainer";
import { Card } from "@components/common/cards/Card";
import { HeaderContainer } from "@components/common/headers/HeaderContainer";

import { useWindowWidth } from "@hooks/useWindowWidth";

import "./EasySteps.scss";
import esAccImage from "@assets/images/es-account.png";
import esCvImage from "@assets/images/es-cv.png";
import esApplyImage from "@assets/images/es-apply.png";

export const EasySteps = () => {
  const innerWidth = useWindowWidth();

  return (
    <section className="easy-steps">
      <HeaderContainer>
        <h1 className="header">
          tylko
          <span className="header header--orange">
            {" "}
            3 proste kroki {innerWidth >= 768 ? <br /> : null}
          </span>
          do nowych możliwości
        </h1>
      </HeaderContainer>
      <CardContainer>
        <Card>
          <img src={esAccImage} alt="" />
          <h6 className="card-header">załóż konto</h6>
          <p className="card-side-text">
            Zarejestruj się, aby uzyskać dostęp do spersonalizowanych ofert
            pracy.
          </p>
        </Card>
        <Card>
          <img src={esCvImage} alt="" />
          <h6 className="card-header">Stwórz CV</h6>
          <p className="card-side-text">
            Skorzystaj z naszego kreatora i stwórz profesjonalne CV.
          </p>
        </Card>
        <Card>
          <img src={esApplyImage} alt="" />
          <h6 className="card-header">Aplikuj</h6>
          <p className="card-side-text">
            Wybierz ofertę i wyślij aplikację w kilka chwil.
          </p>
        </Card>
      </CardContainer>
    </section>
  );
};
