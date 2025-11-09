import type { ReactNode } from "react";
import * as style from "./card.css";

interface CardProps {
  children: ReactNode;
  type?: "default" | "accent";
}

const Card = ({ children, type = "default" }: CardProps) => {
  return <article className={style.card({ type: type })}>{children}</article>;
};

export default Card;
