import type { ReactNode } from "react";
import * as style from "./headline.css";

interface HeadlineProps {
  children: ReactNode;
}

const Headline = ({ children }: HeadlineProps) => {
  return <h2 className={style.headline}>{children}</h2>;
};

interface HighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps) => {
  return <span className={style.highlight}>{children}</span>;
};

export default Headline;
