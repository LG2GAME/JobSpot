import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  MozOsxFontSmoothing: "grayscale",
  padding: 0,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("main", {
  minHeight: "100vh",
});

globalStyle("body", {
  backgroundColor: vars.color.snow,
  color: vars.color.onyx,
  fontFamily: "Poppins, sans-serif",
  fontWeight: vars.fontWeight.medium,
  minHeight: "100vh",
});

globalStyle("ul", {
  listStyle: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("a, button, .clickable", {
  display: "inline-block",
  transition: "transform 0.2s ease, opacity 0.2s ease",
  cursor: "pointer",
});

globalStyle("a:hover, button:hover, .clickable:hover", {
  transform: "scale(1.03)",
});

globalStyle("a:active, button:active, .clickable:active", {
  transform: "scale(0.97)",
});
