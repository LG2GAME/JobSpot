import { Card } from "@components/common/cards/Card";
import { CardContainer } from "@components/common/cards/CardContainer";
import { HeaderContainer } from "@components/common/headers/HeaderContainer";

import { mockOpinions } from "@assets/data/mockOpinions";

import "./Opinions.scss";
import apostropheIcon from "@assets/images/apostrophe.png";

export const Opinions = () => (
  <section className="opinions">
    <HeaderContainer>
      <h1 className="header">
        Co mówią o nas osoby{" "}
        <span className="header--orange">szukające pracy</span>
      </h1>
    </HeaderContainer>
    <CardContainer>
      {mockOpinions.map((opinion, opinionIndex) => (
        <Card key={opinionIndex}>
          <div className="opinions__card-header">
            <img src={opinion.image} />
            <img src={apostropheIcon} />
          </div>
          <div className="opinions__card-more">
            <p className="card-header">{opinion.name}</p>
            <p className="card-side-text">{opinion.job}</p>
          </div>
          <p className="card-side-text">{opinion.comment}</p>
        </Card>
      ))}
    </CardContainer>
  </section>
);
