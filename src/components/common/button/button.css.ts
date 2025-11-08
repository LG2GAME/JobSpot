import { vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: `${vars.spacing.padding.xs} ${vars.spacing.padding.md}`,
    borderRadius: vars.radius.xxl,
    outline: "none",
    border: 0,
    fontSize: vars.fontSize.sm,
    display: "inline-block",
  },
  variants: {
    theme: {
      default: {
        backgroundColor: vars.color.white,
        color: vars.color.turquoise,
      },
      ghost: {
        backgroundColor: vars.color.whiteGhost,
        color: vars.color.white,
      },
    },
  },
});
