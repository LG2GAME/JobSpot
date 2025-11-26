import { image } from "@assets/images";
import { style } from "@vanilla-extract/css";

export const backdrop = style({
  backgroundImage: `url(${image.ellipse})`,
  backgroundPosition: "bottom",
  backgroundSize: "auto",
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: -1,
});
