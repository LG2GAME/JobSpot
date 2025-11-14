import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const opinionWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: vars.spacing.gap.md,
});
