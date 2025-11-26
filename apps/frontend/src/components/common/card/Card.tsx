import type { ReactNode } from "react";
import * as style from "./card.css";

interface CardProps {
  children: ReactNode;
  type?: "default" | "accent";
  dest?: "gallery";
}

const Card = ({ children, type = "default", dest }: CardProps) => {
  return (
    <article className={style.card({ type: type, dest })}>{children}</article>
  );
};

export default Card;
