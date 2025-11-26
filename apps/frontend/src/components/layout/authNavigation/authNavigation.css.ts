import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const navigation = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.spacing.padding.sm}  ${vars.spacing.padding.md}`,
  boxShadow: `0px 1px 6px 0px ${vars.color.royalBlueGhost}`,
  zIndex: 1,
  backgroundColor: vars.color.white,
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.turquoise,
});
