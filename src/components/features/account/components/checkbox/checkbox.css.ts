import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const checkboxWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.gap.xs,
  marginRight: "auto",
});

export const checkbox = style({
  width: 24,
  height: 24,
  appearance: "none",
  position: "relative",
  verticalAlign: "middle",
  borderRadius: vars.radius.xs,
  cursor: "pointer",
  transition: "0.2s ease",

  selectors: {
    "&::before": {
      content: "",
      width: "100%",
      height: "100%",
      border: `3px solid ${vars.color.onyx}`,
      position: "absolute",
      borderRadius: vars.radius.xs,
      transition: "0.2s ease",
    },
    "&:checked::before": {
      borderColor: vars.color.orange,
    },
    "&::after": {
      content: "",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "7px",
      height: "14px",
      borderRight: `3px solid ${vars.color.orange}`,
      borderBottom: `3px solid ${vars.color.orange}`,
      transform: "translate(calc(-50% - 0px), calc(-50% - 2px)) rotate(45deg)",
      opacity: 0,
      transition: "0.2s ease",
    },
    "&:checked::after": { opacity: 1 },
  },
});
