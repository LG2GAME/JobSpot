import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const headline = recipe({
  base: {
    fontSize: vars.fontSize.xl,
    fontWeight: vars.fontWeight.bold,
    textTransform: "capitalize",
  },

  variants: {
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
    },
  },
});

export const highlight = style({
  color: vars.color.orange,
});
