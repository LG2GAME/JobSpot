import { useEffect, useState } from "react";
import { mq, vars } from "@styles/theme.css";
import { getGapInPx } from "../utils/getComputedStyle";

export const useCardWidth = (
  wrapperRef: React.RefObject<HTMLDivElement | null>
) => {
  const [itemsPerView, setItemsPerView] = useState<number>(3);

  useEffect(() => {
    const updateCardWidth = () => {
      const wrapperWidth = wrapperRef.current?.clientWidth;
      if (!wrapperWidth) return;

      let perView = 3;
      if (window.matchMedia(mq.md).matches) perView = 1;
      else if (window.matchMedia(mq.lg).matches) perView = 2;

      setItemsPerView(perView);

      const gapPx = getGapInPx(vars.spacing.gap.md);
      const totalGap = gapPx * (perView - 1);
      const cardWidth = (wrapperWidth - totalGap) / perView;

      document.documentElement.style.setProperty(
        "--card-width",
        `${cardWidth}px`
      );
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [wrapperRef]);

  return itemsPerView;
};
