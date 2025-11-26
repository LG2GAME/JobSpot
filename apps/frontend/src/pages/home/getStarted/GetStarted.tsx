import {
  Card,
  CardWrapper,
  Headline,
  Highlight,
  Section,
} from "@components/common";
import { useDeviceCategory } from "@hooks/useDeviceCategory";
import * as style from "./getStarted.css";
import { image } from "@assets/images";

const GetStarted = () => {
  const { isDesktop } = useDeviceCategory();

  return (
    <Section type="column">
      <Headline align="center">
        Tylko <Highlight>3 proste kroki</Highlight> {isDesktop && <br />} do
        nowych możliwości
      </Headline>
      <CardWrapper>
        <Card>
          <img
            className={style.cardImage}
            src={image.account}
            alt="Rejestracja konta"
            loading="lazy"
          />
          <h2 className={style.cardHeader}>Załóż konto</h2>
          <p className={style.cardParagraph}>
            Zarejestruj się, aby uzyskać dostęp do spersonalizowanych ofert
            pracy.
          </p>
        </Card>
        <Card>
          <img
            className={style.cardImage}
            src={image.cv}
            alt="Tworzenie CV"
            loading="lazy"
          />
          <h2 className={style.cardHeader}>Stwórz CV</h2>
          <p className={style.cardParagraph}>
            Skorzystaj z naszego kreatora i stwórz profesjonalne CV.
          </p>
        </Card>
        <Card>
          <img
            className={style.cardImage}
            src={image.apply}
            alt="Aplikowanie o pracę"
            loading="lazy"
          />
          <h2 className={style.cardHeader}>Aplikuj</h2>
          <p className={style.cardParagraph}>
            Wybierz ofertę i wyślij aplikację w kilka chwil.
          </p>
        </Card>
      </CardWrapper>
    </Section>
  );
};

export default GetStarted;
