import { Button, Section } from "@components/common";
import * as style from "./underConstruction.css";
import { image } from "@assets/images";

const UnderConstruction = () => {
  return (
    <Section type="column">
      <div className={style.underConstructionWrapper}>
        <h2>Strona, którą chcesz odwiedzić, jest w trakcje tworzenia.</h2>
        <img
          className={style.underConstructionImage}
          src={image.inProgress}
          loading="lazy"
        />
        <p>Daj nam trochę czasu i wróć za moment.</p>
        <Button theme="ghost" to="/">
          Wróć na stronę główną
        </Button>
      </div>
    </Section>
  );
};

export default UnderConstruction;
