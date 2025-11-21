import { useEffect, useState } from "react";

interface UseAutoScrollProps {
  galleryRef: React.RefObject<HTMLDivElement | null>;
  offset: number;
  setOffset: (value: number) => void;
  totalItems: number;
  itemsPerView: number;
  handleScroll: (direction: "next" | "prev") => void;
  intervalMs?: number;
}

export const useAutoScroll = ({
  galleryRef,
  offset,
  setOffset,
  totalItems,
  itemsPerView,
  handleScroll,
  intervalMs = 5000,
}: UseAutoScrollProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const maxOffset = Math.ceil(totalItems / itemsPerView) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered || !galleryRef.current) return;
      if (offset >= maxOffset) {
        galleryRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setOffset(0);
      } else {
        handleScroll("next");
      }
    }, intervalMs);
    return () => clearInterval(interval);
  }, [
    offset,
    setOffset,
    maxOffset,
    handleScroll,
    galleryRef,
    isHovered,
    intervalMs,
  ]);

  useEffect(() => {
    const wrapper = galleryRef.current;
    if (!wrapper) return;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [galleryRef]);
};
