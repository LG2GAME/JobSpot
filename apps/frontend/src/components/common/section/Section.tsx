import type { ReactNode } from "react";
import * as style from "./section.css";

interface SectionProps {
  children: ReactNode;
  type?: "row" | "column";
}

const Section = ({ children, type = "row" }: SectionProps) => {
  return (
    <section className={style.section({ type: type })}>{children}</section>
  );
};

export default Section;
