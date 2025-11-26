import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import * as style from "./button.css";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  to?: LinkProps["to"];
  href?: string;
  ariaLabel?: string;
  theme?:
    | "default"
    | "ghost"
    | "darkGhost"
    | "accent"
    | "border"
    | "borderSm"
    | "galleryOn"
    | "galleryOff";
  key?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  disabled,
  to,
  href,
  ariaLabel,
  theme = "default",
  key,
  onClick,
}: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={style.button({ theme })}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return to ? (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={style.button({ theme })}
      key={key}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      aria-label={ariaLabel}
      className={style.button({ theme })}
      key={key}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
