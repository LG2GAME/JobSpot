import { Link } from "react-router-dom";

import { Card } from "@components/common/cards/Card";

import "./GallerySlider.scss";
import localisationIcon from "@assets/images/localisation.png";
import timeJobIcon from "@assets/images/time-job.png";

export const GallerySlider = ({ data, scrollRef }) => (
  <div className="job-slider" ref={scrollRef}>
    {data.map((item, index) => (
      <Card key={index}>
        <div className="job-card__header">
          <img src={item.image} alt={item.title} />
          <div className="job-card__title-box">
            <p className="card-header">{item.title}</p>
            <div className="job-card__info">
              <p className="card-side-text">{item.comp}</p>
              <p className="card-side-text">{item.time}</p>
            </div>
          </div>
        </div>
        <p className="card-side-text">{item.desc}</p>
        <div className="job-card__footer">
          <Link to="/" className="btn btn-white-br">
            Aplikuj
          </Link>
          <span>
            <div className="job-card__footer-info">
              <img src={localisationIcon} alt="lokalizacja" />
              <p className="card-side-text">{item.localisation}</p>
            </div>
            <div className="job-card__footer-info">
              <img src={timeJobIcon} alt="czas pracy" />
              <p className="card-side-text">{item.timeJob}</p>
            </div>
          </span>
        </div>
      </Card>
    ))}
  </div>
);
