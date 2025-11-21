import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const registerHeader = style({
  textAlign: "center",
});

export const registerTitle = style({
  color: vars.color.turquoise,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  textTransform: "uppercase",
});

export const registerGreeting = style({
  fontSize: vars.fontSize.sm,
});

export const registerForm = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: vars.spacing.gap.md,
});

export const registerActions = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media": {
    [mq.xs]: { flexDirection: "column", gap: vars.spacing.gap.sm },
  },
});

export const registerCheckboxLink = style({
  textDecoration: "underline",
  marginLeft: "auto",
});

export const registerFooter = style({
  textAlign: "center",
});

export const registerPrompt = style({
  textTransform: "capitalize",
});

export const registerLink = style({
  color: vars.color.orange,
  textDecoration: "underline",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
});
