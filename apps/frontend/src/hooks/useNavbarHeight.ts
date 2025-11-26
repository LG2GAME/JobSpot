import { useEffect, useRef } from "react";

export const useNavigationHeight = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const updateHeight = () => {
      const height = navRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty(
        "--nav-height",
        `${height + 1}px`
      );
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(navRef.current);

    updateHeight();

    return () => {
      observer.disconnect();
    };
  }, []);

  return navRef;
};
