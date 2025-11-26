import {
  Card,
  CardWrapper,
  Headline,
  Highlight,
  Section,
} from "@components/common";
import { mockCategories } from "@assets/mockDatas/mockCategories";
import * as style from "./jobCategories.css";

const JobCategories = () => {
  return (
    <Section type="column">
      <Headline align="center">
        Popularne <Highlight>kategorie pracy</Highlight>
      </Headline>
      <CardWrapper columns="4">
        {mockCategories.map(({ id, icon, title, offers }) => {
          const isAccent = id % 3 === 0;

          return (
            <Card key={id} type={isAccent ? "accent" : "default"}>
              <img
                className={style.catImage}
                src={icon}
                alt={`Ikona kategorii: ${title}`}
                loading="lazy"
              />
              <h3
                className={style.catHeader({
                  accent: isAccent ? "accent" : undefined,
                })}
              >
                {title}
              </h3>
              <p
                className={style.catParagraph({
                  accent: id % 3 === 0 ? "accent" : undefined,
                })}
              >
                {offers} ofert
              </p>
            </Card>
          );
        })}
      </CardWrapper>
    </Section>
  );
};

export default JobCategories;
