import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const cardImage = style({
  width: "25%",
  height: "auto",
});

export const cardHeader = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
});

export const cardParagraph = style({
  fontSize: vars.fontSize.xs,
});
