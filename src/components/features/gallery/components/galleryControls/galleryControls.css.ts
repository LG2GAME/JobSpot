import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.md,
});

export const buttonArrow = recipe({
  base: {
    width: 60,
    height: 60,
    objectFit: "contain",
    padding: vars.spacing.padding.xxs,
  },
  variants: {
    side: {
      left: { rotate: "-90deg" },
      right: { rotate: "90deg" },
    },
  },
});
