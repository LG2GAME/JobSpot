import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  padding: vars.spacing.padding.md,
  backgroundColor: vars.color.turquoise,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.gap.md,
});

export const footerTop = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.spacing.gap.lg,
  "@media": {
    [mq.lg]: { gridTemplateColumns: "repeat(2, 1fr)" },
    [mq.xs]: { gridTemplateColumns: "1fr" },
  },
});

export const footerColumn = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: vars.spacing.gap.xs,
  color: vars.color.white,
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
});

export const socialWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: vars.spacing.gap.xs,
});

export const social = style({
  width: 35,
  height: 35,
});

export const header = style({
  textTransform: "uppercase",
  fontSize: vars.fontSize.sm,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.gap.xs,
  textTransform: "capitalize",
});

export const contactItem = style({
  display: "flex",
  gap: vars.spacing.gap.xxs,
});

export const footerDivider = style({
  width: "100%",
  height: 3,
  backgroundColor: vars.color.blackGhost,
});

export const footerBottom = style({
  display: "flex",
  justifyContent: "space-between",
  color: vars.color.white,
  fontSize: vars.fontSize.xxs,
});
