import { mq } from "@styles/theme.css";
import { useMediaQuery } from "./useMediaQuery";
import { useCallback, useEffect, useState } from "react";

export const useMobileNavigation = () => {
  const isMobile = useMediaQuery(mq.lg);
  const [isOpen, setIsOpen] = useState(false);

  const manageNavigation = useCallback(
    (shouldOpen: boolean) => {
      setIsOpen(shouldOpen);

      if (isMobile) {
        document.body.style.overflow = shouldOpen ? "hidden" : "auto";
        if (shouldOpen) window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.body.style.overflow = "auto";
      }
    },
    [isMobile]
  );

  const toggleMenu = () => manageNavigation(!isOpen);
  const handleMenu = () => isMobile && toggleMenu();

  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);

  return { isOpen, isMobile, toggleMenu, handleMenu };
};
