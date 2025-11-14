import { Button, Headline, Highlight, Section } from "@components/common";
import * as style from "./jobInfo.css";
import { useDeviceCategory } from "@hooks/useDeviceCategory";
import { image } from "@assets/images";

const JobInfo = () => {
  const { isDesktop } = useDeviceCategory();

  return (
    <Section type="row">
      <div className={style.content}>
        <Headline align={isDesktop ? "left" : "center"}>
          Pomożemy ci znaleźć {isDesktop && <br />}
          <Highlight>wymarzoną pracę!</Highlight>
        </Headline>
        <p className={style.paragraph}>
          Nasza platforma jest stworzona z myślą o Tobie. Dzięki łatwej
          nawigacji, intuicyjnemu interfejsowi i systemowi rekomendacji,
          zaoszczędzisz czas na przeszukiwanie ofert. Niezależnie od branży,
          znajdziesz oferty, które pasują do Twoich umiejętności. Dołącz do nas
          i rozwijaj swoją karierę już teraz!
        </p>
        {isDesktop && (
          <p className={style.paragraph}>
            Każda oferta pracy jest starannie weryfikowana, co zapewnia Ci
            dostęp do najlepszych ofert dostępnych na rynku. Nasze narzędzia
            wspierają Cię na każdym etapie poszukiwania pracy, od aplikacji po
            rozmowę kwalifikacyjną. Jesteśmy z Tobą na każdym kroku!
          </p>
        )}
        <div className={style.btnWrapper}>
          <Button to="/" theme="darkGhost">
            Zaczynajmy
          </Button>
          <Button to="/" theme="accent">
            Dodaj swoje CV
          </Button>
        </div>
      </div>
      <div className={style.visual} aria-hidden="true">
        <img
          className={style.imageChoice}
          src={image.multipleChoice}
          alt="Ilustracja osoby podejmującej decyzję"
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default JobInfo;
