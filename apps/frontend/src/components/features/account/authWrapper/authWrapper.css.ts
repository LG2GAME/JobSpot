import { image } from "@assets/images";
import { mq, vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const authWrapper = style({
  display: "flex",
  alignItems: "center",
  minHeight: "calc(100vh - var(--nav-height))",
  height: "calc(100vh - var(--nav-height))",
});

export const authContent = style({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: `${vars.spacing.padding.md} ${vars.spacing.padding.lg}`,
  "@media": {
    [mq.lg]: { width: "100%" },
  },
});

export const authVisual = style({
  width: "50%",
  height: "100%",
  backgroundImage: `url(${image.authBackdrop})`,
  backgroundPosition: "bottom right",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  "@media": {
    [mq.lg]: { display: "none" },
  },
});
