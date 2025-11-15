import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.md,
  "@media": {
    [mq.lg]: {
      width: "100%",
      justifyContent: "end",
    },
  },
});

export const buttonArrow = recipe({
  base: {
    width: 60,
    height: 60,
    objectFit: "contain",
    padding: vars.spacing.padding.xxs,
    "@media": {
      [mq.md]: {
        width: 45,
        height: 45,
      },
    },
  },
  variants: {
    side: {
      left: { rotate: "-90deg" },
      right: { rotate: "90deg" },
    },
  },
});
