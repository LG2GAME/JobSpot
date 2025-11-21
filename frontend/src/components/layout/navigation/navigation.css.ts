import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navigation = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.spacing.padding.sm}  ${vars.spacing.padding.md}`,
  textTransform: "capitalize",
  zIndex: 1,
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  zIndex: 2,
});

export const menuToggle = style({
  width: 35,
  display: "none",
  flexDirection: "column",
  gap: vars.spacing.gap.xxxs,
  zIndex: 2,
  cursor: "pointer",

  "@media": { [mq.lg]: { display: "flex" } },
});
export const menuToggleLine = style({
  height: 5,
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.xxl,
});

export const menu = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: vars.spacing.gap.lg,
    zIndex: 1,

    "@media": {
      [mq.lg]: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: vars.spacing.gap.lg,
        backgroundColor: vars.color.turquoise,
        transition: "transform 0.4s ease",
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        transform: "translate(0)",
      },
      false: {
        transform: "translate(-105%)",
      },
    },
  },
});

export const menuItem = style({
  color: vars.color.white,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,

  "@media": {
    [mq.lg]: {
      fontSize: vars.fontSize.md,
    },
  },
});

export const account = style({
  width: vars.fontSize.xl,
});
