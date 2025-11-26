import { style } from "@vanilla-extract/css";
import { mq, vars } from "@styles/theme.css";

export const galleryWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: vars.spacing.gap.md,
});

export const galleryNavigation = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "@media": {
    [mq.lg]: {
      flexDirection: "column",
      gap: vars.spacing.gap.md,
    },
  },
});

export const galleryButton = style({
  textAlign: "center",
});
