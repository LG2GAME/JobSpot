import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headline = style({
  textAlign: "center",
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  textTransform: "capitalize",
});

export const highlight = style({
  color: vars.color.orange,
});
