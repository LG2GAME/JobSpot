import { useRef, useState } from "react";
import { vars } from "@styles/theme.css";
import { getGapInPx } from "@utils/getComputedStyle";

export const useGalleryScroll = (
  itemsPerView: number,
  itemsInTotal: number
) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = (direction: "next" | "prev") => {
    if (!galleryRef.current) return;

    const cardWidth = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--card-width"
      )
    );
    const gapPx = getGapInPx(vars.spacing.gap.md);

    let newOffset = direction === "next" ? offset + 1 : offset - 1;
    newOffset = Math.max(
      0,
      Math.min(newOffset, Math.ceil(itemsInTotal / itemsPerView) - 1)
    );

    galleryRef.current.scrollTo({
      left: newOffset * (cardWidth + gapPx) * itemsPerView,
      behavior: "smooth",
    });

    setOffset(newOffset);
  };

  return { galleryRef, offset, setOffset, handleScroll };
};
