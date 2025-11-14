import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const sliderProgressWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.xxs,
  justifyContent: "center",
  alignItems: "center",
});

export const sliderProgressDot = recipe({
  base: {
    width: 10,
    height: 10,
    borderRadius: vars.radius.xxl,
  },
  variants: {
    state: {
      active: { border: `2px solid ${vars.color.orange}` },
      inactive: { backgroundColor: vars.color.orange },
    },
  },
});
