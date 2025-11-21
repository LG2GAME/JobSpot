import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const catImage = style({
  width: "25%",
  backgroundColor: vars.color.blackGhost,
  borderRadius: vars.radius.xxl,
  padding: vars.spacing.padding.xs,
});

export const catHeader = recipe({
  base: {
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.bold,
    textTransform: "capitalize",
  },
  variants: {
    accent: { accent: { color: vars.color.white } },
  },
});

export const catParagraph = recipe({
  base: { fontSize: vars.fontSize.xs },
  variants: {
    accent: { accent: { color: vars.color.white } },
  },
});
