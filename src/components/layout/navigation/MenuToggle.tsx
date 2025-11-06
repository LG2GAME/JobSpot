import * as style from "./navigation.css";

interface MenuToggleProps {
  className?: string;
  onClick: () => void;
  ariaExpanded: boolean;
  ariaControls: string;
  ariaLabel: string;
}

const MenuToggle = ({
  className,
  onClick,
  ariaExpanded,
  ariaControls,
  ariaLabel,
}: MenuToggleProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
    >
      <span className={style.menuToggleLine}></span>
      <span className={style.menuToggleLine}></span>
      <span className={style.menuToggleLine}></span>
    </div>
  );
};

export default MenuToggle;
