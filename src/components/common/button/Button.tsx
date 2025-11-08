import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import * as style from "./button.css";

interface ButtonProps {
  children: ReactNode;
  to?: LinkProps["to"];
  ariaLabel?: string;
  theme?: "default" | "ghost";
}

const Button = ({
  children,
  to,
  ariaLabel,
  theme = "default",
}: ButtonProps) => {
  return to ? (
    <Link to={to} aria-label={ariaLabel} className={style.button({ theme })}>
      {children}
    </Link>
  ) : (
    <button aria-label={ariaLabel} className={style.button({ theme })}>
      {children}
    </button>
  );
};

export default Button;
