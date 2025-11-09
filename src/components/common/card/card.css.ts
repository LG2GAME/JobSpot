import { vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    boxShadow: `0px 10px 60px 0px ${vars.color.royalBlueGhost}`,
    padding: vars.spacing.padding.xs,
    borderRadius: vars.radius.lg,
    gap: vars.spacing.gap.xs,
    width: "100%",
    height: "fill-container",
  },
  variants: {
    type: {
      default: { backgroundColor: "inherit" },
      accent: { backgroundColor: vars.color.orange },
    },
  },
});
