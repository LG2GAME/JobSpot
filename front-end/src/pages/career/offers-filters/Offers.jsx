import { useState } from "react";

import { JobCard } from "@components/common/cards/Card";

import offers from "@assets/data/offers";

import "./OffersFilters.scss";

export const Offers = ({ filtersCollapsed }) => {
  const [more, setMore] = useState(10);

  return (
    <div
      className={`career-offers ${
        filtersCollapsed ? "career-offers--collapsed" : ""
      }`}
    >
      {offers.slice(0, more).map((offer, index) => (
        <JobCard key={index} offer={offer} />
      ))}
      <a className="btn btn-white-br" onClick={() => setMore(more + 10)}>
        Więcej ofert
      </a>
    </div>
  );
};
