import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100vh",
  height: "100%",
  selectors: {
    "&:first-of-type": {
      minHeight: `calc(100vh - var(--nav-height) - ${vars.spacing.padding.lg})`,
      height: `calc(100vh - var(--nav-height) - ${vars.spacing.padding.lg})`,
    },
  },
});
