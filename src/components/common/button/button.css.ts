import { mq, vars } from "@styles/theme.css";
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
      darkGhost: {
        backgroundColor: vars.color.blackGhost,
      },
      accent: {
        backgroundColor: vars.color.orange,
        color: vars.color.white,
      },
      border: {
        border: `3px solid ${vars.color.orange}`,
        color: vars.color.orange,
        backgroundColor: "inherit",
      },
      borderSm: {
        border: `3px solid ${vars.color.orange}`,
        padding: `${vars.spacing.padding.xxs} ${vars.spacing.padding.md}`,
        color: vars.color.orange,
        fontSize: vars.fontSize.xs,
      },
      galleryOn: {
        padding: 0,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: vars.color.orange,
        "@media": {
          [mq.md]: {
            width: 45,
            height: 45,
          },
        },
      },
      galleryOff: {
        padding: 0,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        border: `3px solid ${vars.color.orange}`,
        backgroundColor: vars.color.white,
        cursor: "not-allowed",
        pointerEvents: "none",
        "@media": {
          [mq.md]: {
            width: 45,
            height: 45,
          },
        },
      },
    },
  },
});
