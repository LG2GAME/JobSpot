import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const loginHeader = style({
  textAlign: "center",
});

export const loginTitle = style({
  color: vars.color.turquoise,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  textTransform: "uppercase",
});

export const loginGreeting = style({
  fontSize: vars.fontSize.sm,
});

export const loginForm = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: vars.spacing.gap.md,
});

export const loginActions = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media": {
    [mq.xs]: { flexDirection: "column", gap: vars.spacing.gap.sm },
  },
});

export const loginCheckboxLink = style({
  textDecoration: "underline",
  marginLeft: "auto",
});

export const loginError = style({
  color: vars.color.errorRed,
  textDecoration: "underline",
});

export const loginFooter = style({
  textAlign: "center",
});

export const loginPrompt = style({
  textTransform: "capitalize",
});

export const loginLink = style({
  color: vars.color.orange,
  textDecoration: "underline",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
});
