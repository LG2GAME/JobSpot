import { createGlobalTheme } from "@vanilla-extract/css";

export const mq = {
  xs: "(width <= 576px)",
  md: "(width <= 768px)",
  lg: "(width <= 992px)",
  xl: "(width <= 1200px)",
};

export const vars = createGlobalTheme(":root", {
  colors: {
    black: "#000",
    white: "#fff",
    snow: "#f5fefd",
    gray: "#455A64",
  },
  fontSizes: {
    xxs: "clamp(8px, 1.2vw, 14px)",
    xs: "clamp(12px, 1.8vw, 16px)",
    sm: "clamp(14px, 2.2vw, 20px)",
    md: "clamp(18px, 2.8vw, 24px)",
    lg: "clamp(24px, 3.5vw, 32px)",
    xl: "clamp(28px, 4vw, 36px)",
    xxl: "clamp(36px, 6vw, 64px)",
  },
  fontWeights: {
    black: "900",
    bold: "700",
    medium: "500",
    regular: "400",
  },
  radius: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xxl: "99px",
  },
  spacing: {
    gap: {
      xxs: "clamp(8px, 1vw, 10px)",
      xs: "clamp(12px, 1.5vw, 15px)",
      sm: "clamp(16px, 2vw, 20px)",
      md: "clamp(24px, 3vw, 30px)",
      lg: "clamp(48px, 5vw, 60px)",
      xl: "clamp(96px, 10vw, 120px)",
    },
    padding: {},
  },
});
