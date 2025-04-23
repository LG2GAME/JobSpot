import { JobCard } from "@components/common/cards/Card";

import "./GallerySlider.scss";

export const GallerySlider = ({ data, scrollRef, length }) => (
  <div className="job-slider" ref={scrollRef}>
    {data.slice(0, length).map((offer, index) => (
      <JobCard key={index} offer={offer} />
    ))}
  </div>
);
