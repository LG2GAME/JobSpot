import type { ReactNode } from "react";
import * as style from "./headline.css";

interface HeadlineProps {
  children: ReactNode;
  align?: "left" | "center";
}

const Headline = ({ children, align = "left" }: HeadlineProps) => {
  return <h2 className={style.headline({ align: align })}>{children}</h2>;
};

interface HighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps) => {
  return <span className={style.highlight}>{children}</span>;
};

export default Headline;
