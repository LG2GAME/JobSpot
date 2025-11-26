import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const profileWrapper = style({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const profile = style({
  width: "25%",
  borderRadius: vars.radius.xxl,
});

export const apostrophe = style({
  width: "25%",
  height: "auto",
  objectFit: "contain",
});

export const name = style({
  fontSize: vars.fontSize.sm,
});

export const job = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray,
});

export const comment = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray,
});
