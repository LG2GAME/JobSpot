import { icon } from "@assets/icons";
import { Button, Section } from "@components/common";
import * as style from "./hero.css";
import { useDeviceCategory } from "@hooks/useDeviceCategory";
import { image } from "@assets/images";

const Hero = () => {
  const { isDesktop } = useDeviceCategory();

  return (
    <Section type="row">
      <div className={style.content}>
        <h1 id="hero-heading" className={style.header}>
          <span className={style.highlighted}>Znalezienie pracy,</span> nigdy{" "}
          {isDesktop && <br />} nie było tak łatwe.
        </h1>

        <p className={style.paragraph}>
          Prosty proces aplikacji i dostęp do najlepszych ofert pracy – znajdź
          idealną posadę w mgnieniu oka!
        </p>

        <div className={style.btnWrapper}>
          <Button to="/" ariaLabel="Dołącz do platformy za darmo">
            Dołącz za darmo!
          </Button>

          <Button
            to="/"
            theme="ghost"
            ariaLabel="Przejdź do wyszukiwania ofert pracy"
          >
            <img
              className={style.image}
              src={icon.search}
              alt=""
              aria-hidden="true"
            />
            Znajdź pracę
          </Button>
        </div>
      </div>

      <div className={style.visual} aria-hidden="true">
        <img
          className={style.imagePana}
          src={image.learningPana}
          alt="Ilustracja osoby uczącej się przed komputerem"
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default Hero;
