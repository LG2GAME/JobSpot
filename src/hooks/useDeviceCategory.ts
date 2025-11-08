import { mq } from "@styles/theme.css";
import { useMediaQuery } from "./useMediaQuery";

interface DeviceCategoryProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useDeviceCategory = (): DeviceCategoryProps => {
  const isMobile = useMediaQuery(mq.lg);
  const isTablet = useMediaQuery(mq.md) && !isMobile;
  const isDesktop = !isMobile && !isTablet;

  return { isMobile, isTablet, isDesktop };
};
