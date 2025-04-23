import { Link } from "react-router-dom";

import "./JobCard.scss";
import localisationIcon from "@assets/images/localisation.png";
import timeJobIcon from "@assets/images/time-job.png";

export const Card = ({ children, setApart }) => (
  <div className={`card ${setApart ? "card--apart" : ""}`}>{children}</div>
);

export const JobCard = ({ offer }) => (
  <Card>
    <div className="job-card__header">
      <img src={offer.logo} alt={offer.title} />
      <div className="job-card__title-box">
        <p className="card-header">{offer.title}</p>
        <div className="job-card__info">
          <p className="card-side-text">{offer.company}</p>
          <p className="card-side-text">{offer.date}</p>
        </div>
      </div>
    </div>
    <p className="job-card__desc card-side-text">{offer.description}</p>
    <div className="job-card__footer">
      <Link to={offer.jobLink} className="btn btn-white-br" target="_blank">
        Aplikuj
      </Link>
      <span>
        <div className="job-card__footer-info">
          <img src={localisationIcon} alt="lokalizacja" />
          <p className="card-side-text">{offer.location}</p>
        </div>
        <div className="job-card__footer-info">
          <img src={timeJobIcon} alt="czas pracy" />
          <p className="card-side-text">{offer.jobType}</p>
        </div>
      </span>
    </div>
  </Card>
);
