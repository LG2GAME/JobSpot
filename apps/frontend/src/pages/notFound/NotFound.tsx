import { Button, Section } from "@components/common";
import * as style from "./notFound.css";
import { image } from "@assets/images";

const NotFound = () => {
  return (
    <Section type="column">
      <div className={style.notFoundWrapper}>
        <h2>Wygląda na to, że nic tu nie ma...</h2>
        <img
          className={style.notFoundImage}
          src={image.notFound}
          loading="lazy"
        />
        <p>Przykro mi, ale nie znaleźliśmy strony, której szukasz.</p>
        <Button theme="ghost" to="/">
          Wróć na stronę główną
        </Button>
      </div>
    </Section>
  );
};

export default NotFound;
