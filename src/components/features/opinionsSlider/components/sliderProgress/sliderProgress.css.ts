import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const sliderProgressContainer = style({
  display: "flex",
  justifyContent: "center",
});

export const sliderProgressWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.xxs,
  alignItems: "center",
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: vars.color.orange,
    zIndex: -1,
  },
});

export const sliderProgressDot = recipe({
  base: {
    width: 10,
    height: 10,
    borderRadius: vars.radius.xxl,
  },
  variants: {
    state: {
      active: {
        border: `3px solid ${vars.color.orange}`,
        backgroundColor: vars.color.white,
      },
      inactive: { backgroundColor: vars.color.orange },
    },
  },
});
