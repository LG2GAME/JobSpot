import { mq, vars } from "@styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const cardWrapper = recipe({
  base: {
    display: "grid",
    width: "100%",
    gap: vars.spacing.gap.md,
  },
  variants: {
    columns: {
      "3": {
        gridTemplate: "1fr / repeat(3, 1fr)",
        "@media": {
          [mq.md]: { gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)" },
          [mq.xs]: { gridTemplateColumns: "1fr" },
        },
      },
      "4": {
        gridTemplate: "2fr / repeat(4, 1fr)",
        "@media": {
          [mq.xl]: { gridTemplate: "1fr / repeat(3, 1fr)" },
          [mq.md]: { gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)" },
          [mq.xs]: { gridTemplateColumns: "1fr" },
        },
      },
    },
  },
});
