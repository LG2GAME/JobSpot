import { style } from "@vanilla-extract/css";
import { mq, vars } from "@styles/theme.css";

export const header = style({
  display: "flex",
  gap: vars.spacing.gap.sm,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const logo = style({
  width: 70,
  height: 70,
  objectFit: "contain",
});

export const info = style({
  flex: 1,
  minWidth: 0,
});

export const title = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const company = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const date = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
});

export const description = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const footer = style({
  display: "flex",
  gap: vars.spacing.gap.sm,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const footerWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.gap.xxs,
});

export const footerInfo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.gap.xxs,
  "@media": {
    [mq.md]: {
      fontSize: vars.fontSize.xs,
    },
  },
});

export const jobIcon = style({
  width: 20,
  height: 20,
  "@media": {
    [mq.md]: {
      width: 15,
      height: 15,
    },
  },
});
