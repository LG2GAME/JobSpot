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
      default: { backgroundColor: vars.color.white },
      accent: { backgroundColor: vars.color.orange },
    },
    dest: {
      gallery: {
        minWidth: "var(--card-width)",
        width: "auto",
        flexBasis: "var(--card-width)",
        flexShrink: 0,
        flexGrow: 0,
        boxShadow: "none",
        border: `3px solid ${vars.color.royalBlueGhost}`,
      },
    },
  },
});
