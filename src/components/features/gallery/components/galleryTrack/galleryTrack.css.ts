import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const track = style({
  display: "flex",
  overflow: "hidden",
  gap: vars.spacing.gap.md,
});
