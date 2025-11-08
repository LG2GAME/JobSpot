import type { ReactNode } from "react";
import * as style from "./section.css";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={style.section}>{children}</section>;
};

export default Section;
