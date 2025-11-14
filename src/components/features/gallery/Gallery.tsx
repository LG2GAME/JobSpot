import { useRef, useState } from "react";
import * as style from "./gallery.css";
import { GalleryControls, GalleryFilters, GalleryTrack } from "./components";
import { useCardWidth } from "./hooks/useCardWidth";
import { useGalleryScroll } from "./hooks/useGalleryScroll";
import { Button } from "@components/common";

const filterOptions = [
  { id: "hot", label: "Gorące oferty" },
  { id: "latest", label: "Najnowsze oferty" },
  { id: "popular", label: "Popularne oferty" },
];

const Gallery = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("popular");

  const totalItems = 12;

  const itemsPerView = useCardWidth(wrapperRef);
  const { galleryRef, offset, handleScroll } = useGalleryScroll(
    itemsPerView,
    totalItems
  );

  const maxOffset = Math.ceil(totalItems / itemsPerView) - 1;

  return (
    <div ref={wrapperRef} className={style.galleryWrapper}>
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
      <GalleryTrack galleryRef={galleryRef} itemsInTotal={totalItems} />
      <div className={style.galleryButton}>
        <Button theme="accent" to="/">
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
