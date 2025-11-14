import { Button } from "@components/common";
import * as style from "./galleryControls.css";
import { image } from "@assets/images";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  offset: number;
  maxOffset: number;
}

const GalleryControls = ({ onNext, onPrev, offset, maxOffset }: Props) => {
  return (
    <div className={style.buttonWrapper}>
      <Button
        theme={offset <= 0 ? "galleryOff" : "galleryOn"}
        onClick={onPrev}
        aria-label="Poprzednie oferty"
      >
        <img
          src={offset <= 0 ? image.arrowOff : image.arrowOn}
          alt=""
          className={style.buttonArrow({ side: "left" })}
        />
      </Button>

      <Button
        theme={offset >= maxOffset ? "galleryOff" : "galleryOn"}
        onClick={onNext}
        aria-label="Następne oferty"
      >
        <img
          src={offset >= maxOffset ? image.arrowOff : image.arrowOn}
          alt=""
          className={style.buttonArrow({ side: "right" })}
        />
      </Button>
    </div>
  );
};

export default GalleryControls;
