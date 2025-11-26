import { useRef, useState } from "react";
import * as style from "./gallery.css";
import { GalleryCard, GalleryControls, GalleryFilters } from "./components";
import { useCardWidth } from "@hooks/useCardWidth";
import { useGalleryScroll } from "@hooks/useGalleryScroll";
import { Button, Track } from "@components/common";

import mockOffers from "@assets/mockDatas/mockOffers.json";

interface GalleryOffer {
  logo?: string;
  title?: string;
  company?: string;
  date?: string;
  description?: string;
  location?: string;
  jobType?: string;
  jobLink?: string;
}

const filterOptions = [
  { id: "hot", label: "Gorące oferty" },
  { id: "latest", label: "Najnowsze oferty" },
  { id: "popular", label: "Popularne oferty" },
];

const Gallery = () => {
  const galleyWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("popular");

  const totalItems = 12;

  const itemsPerView = useCardWidth(galleyWrapperRef);
  const { galleryRef, offset, handleScroll } = useGalleryScroll(
    itemsPerView,
    totalItems
  );

  const maxOffset = Math.ceil(totalItems / itemsPerView) - 1;

  return (
    <div ref={galleyWrapperRef} className={style.galleryWrapper}>
      <div className={style.galleryNavigation}>
        <GalleryFilters
          options={filterOptions}
          selected={activeFilter}
          onSelect={setActiveFilter}
        />
        <GalleryControls
          onNext={() => handleScroll("next")}
          onPrev={() => handleScroll("prev")}
          offset={offset}
          maxOffset={maxOffset}
        />
      </div>
      <Track
        galleryRef={galleryRef}
        items={mockOffers.slice(0, totalItems)}
        Wrapper={GalleryCard}
        wrapperPropsMapper={(offer: GalleryOffer) => ({ offer })}
      />
      <div className={style.galleryButton}>
        <Button theme="accent" to="/">
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
