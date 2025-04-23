import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "@components/common/headers/HeaderContainer";
import { GalleryFilters } from "@components/common/gallery-filters/GalleryFilters";
import { GallerySlider } from "@components/common/gallery/GallerySlider";

import offers from "@assets/data/offers";

import "./Gallery.scss";
import leftArrowIcon from "@assets/images/left-arrow.png";
import rightArrowIcon from "@assets/images/right-arrow.png";

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("popular");
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log("Aktywny filtr:", activeFilter);
  }, [activeFilter]);

  const scrollSlider = (direction) => {
    const card = sliderRef.current?.children[0];
    const scrollAmount = card.offsetWidth * 2 + 60;

    sliderRef.current.scrollBy({
      left: scrollAmount * (direction === 1 ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <section className="gallery">
      <HeaderContainer>
        <h1 className="header">
          Najnowsze
          <span className="header header--orange"> oferty pracy</span>
        </h1>
      </HeaderContainer>
      <div className="gallery__container">
        <div className="gallery__controls">
          <GalleryFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <div className="gallery__controls-buttons">
            <a className="btn" onClick={() => scrollSlider(0)}>
              <img src={leftArrowIcon} />
            </a>
            <a className="btn" onClick={() => scrollSlider(1)}>
              <img src={rightArrowIcon} />
            </a>
          </div>
        </div>
        <GallerySlider data={offers} scrollRef={sliderRef} length={10} />
      </div>
      <Link to="/career" className="btn btn-orange">
        Zobacz więcej
      </Link>
    </section>
  );
};
