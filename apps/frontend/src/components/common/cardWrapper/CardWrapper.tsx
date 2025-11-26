import type { ReactNode } from "react";
import * as style from "./cardWrapper.css";

interface CardWrapperProps {
  children: ReactNode;
  columns?: "3" | "4";
}

const CardWrapper = ({ children, columns = "3" }: CardWrapperProps) => {
  return (
    <div className={style.cardWrapper({ columns: columns })}>{children}</div>
  );
};

export default CardWrapper;
