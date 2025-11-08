import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const content = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-evenly",
  width: "50%",
  gap: vars.spacing.gap.lg,

  "@media": {
    [mq.xl]: {
      width: "60%",
    },
    [mq.lg]: {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    },
  },
});

export const header = style({
  color: vars.color.white,
  fontSize: vars.fontSize.xl,
});

export const highlighted = style({
  color: vars.color.orange,
});

export const paragraph = style({
  width: "50%",

  "@media": {
    [mq.xs]: {
      width: "100%",
    },
  },
});

export const btnWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.lg,

  "@media": {
    [mq.xs]: {
      flexDirection: "column",
      gap: vars.spacing.gap.md,
    },
  },
});

export const image = style({
  marginRight: vars.spacing.margin.md,
  verticalAlign: "middle",
});

export const visual = style({
  alignItems: "center",
  display: "flex",
  height: "auto",
  width: "50%",
  zIndex: 0,

  "@media": {
    [mq.xl]: {
      width: "40%",
    },
    [mq.lg]: {
      display: "none",
    },
  },
});

export const imagePana = style({
  objectFit: "contain",
  width: "100%",
  height: "100%",
});
