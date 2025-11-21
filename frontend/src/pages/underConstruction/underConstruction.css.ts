import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const underConstructionWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.spacing.gap.lg,
  height: "100%",
  justifyContent: "center",
  textAlign: "center",
});

export const underConstructionImage = style({
  width: "50%",
  height: "50%",
  objectFit: "contain",
});
