import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  position: "relative",
  width: "100%",
  fontSize: vars.fontSize.sm,
});

export const input = style({
  border: 0,
  borderBottom: `2px solid ${vars.color.onyx}`,
  width: "100%",
  outline: 0,
  color: vars.color.onyx,
  background: "transparent",
  transition: "0.2s ease",
  fontSize: vars.fontSize.sm,
  height: 50,

  selectors: {
    "&::placeholder": {
      opacity: 0,
      color: "transparent",
    },
    "&:focus": { borderColor: vars.color.orange },
  },
});

export const label = style({
  position: "absolute",
  bottom: 0,
  display: "block",
  color: vars.color.onyx,
  transition: "0.2s ease",

  selectors: {
    [`${input}:focus ~ &`]: {
      bottom: "100%",
      color: vars.color.orange,
      fontSize: vars.fontSize.xs,
    },
    [`${input}:not(:placeholder-shown) ~ &`]: {
      bottom: "100%",
      fontSize: vars.fontSize.xs,
    },
  },
});
