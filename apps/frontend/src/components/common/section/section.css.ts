import { vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const section = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: `${vars.spacing.padding.lg}`,
    selectors: {
      "&:first-of-type": {
        minHeight: `calc(100vh - var(--nav-height) - ${vars.spacing.padding.sm})`,
        height: `calc(100vh - var(--nav-height) - ${vars.spacing.padding.sm})`,
      },
    },
  },
  variants: {
    type: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column", gap: vars.spacing.gap.lg },
    },
  },
});
