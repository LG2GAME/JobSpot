import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import * as style from "./button.css";

interface ButtonProps {
  children: ReactNode;
  to?: LinkProps["to"];
  theme?: "default" | "ghost";
}

const Button = ({ children, to, theme = "default" }: ButtonProps) => {
  return to ? (
    <Link to={to} className={style.button({ theme })}>
      {children}
    </Link>
  ) : (
    <button className={style.button({ theme })}>{children}</button>
  );
};

export default Button;
