import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  MozOsxFontSmoothing: "grayscale",
  padding: 0,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("body", {
  backgroundColor: vars.colors.snow,
  color: vars.colors.gray,
  fontFamily: "Poppins, sans-serif",
  fontWeight: vars.fontWeights.medium,
});

globalStyle("ul", {
  listStyle: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
