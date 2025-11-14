import { Track } from "@components/common";
import { OpinionCard, SliderProgress } from "./components";
import mockComments from "@assets/mockDatas/mockOpinions.json";
import { useCardWidth } from "@hooks/useCardWidth";
import { useRef } from "react";
import { useGalleryScroll } from "@hooks/useGalleryScroll";
import * as style from "./opinionSlider.css";
import { useAutoScroll } from "./hooks/useAutoScroll";

interface SliderComments {
  image?: string;
  name?: string;
  job?: string;
  comment?: string;
}

const OpinionsSlider = () => {
  const opinionWrapperRef = useRef<HTMLDivElement | null>(null);
  const totalItems = 15;

  const itemsPerView = useCardWidth(opinionWrapperRef);
  const { galleryRef, offset, setOffset, handleScroll } = useGalleryScroll(
    itemsPerView,
    totalItems
  );

  useAutoScroll({
    galleryRef,
    offset,
    setOffset,
    totalItems,
    itemsPerView,
    handleScroll,
    intervalMs: 5000,
  });

  return (
    <div ref={opinionWrapperRef} className={style.opinionWrapper}>
      <Track
        galleryRef={galleryRef}
        items={mockComments.slice(0, totalItems)}
        Wrapper={OpinionCard}
        wrapperPropsMapper={(comment: SliderComments) => ({ comment })}
      />
      <SliderProgress
        offset={offset}
        totalPages={Math.ceil(totalItems / itemsPerView)}
      />
    </div>
  );
};

export default OpinionsSlider;
