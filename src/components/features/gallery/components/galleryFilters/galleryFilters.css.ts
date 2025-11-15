import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const filtersWrapper = style({
  display: "flex",
  gap: vars.spacing.gap.md,
  "@media": {
    [mq.lg]: {
      width: "100%",
      justifyContent: "start",
    },
    [mq.xs]: {
      flexDirection: "column",
    },
  },
});
