import { Card } from "@components/common/cards/card";
import { CardContainer } from "@components/common/cards/CardContainer";
import { HeaderContainer } from "@components/common/headers/HeaderContainer";

import { categoriesData } from "@assets/data/categories";

import "./Categories.scss";

export const Categories = () => (
  <section className="categories">
    <HeaderContainer>
      <h1 className="header">
        Popularne <span className="header header--orange">Kategorie Pracy</span>
      </h1>
    </HeaderContainer>
    <CardContainer>
      {categoriesData.map(({ image, header, text, setApart }, i) => (
        <Card key={i} {...(setApart && { setApart })}>
          <div className="categories__card-image">
            <img src={image} alt={header} />
          </div>
          <h6 className="card-header">{header}</h6>
          <p className="card-side-text">{text}</p>
        </Card>
      ))}
    </CardContainer>
  </section>
);
