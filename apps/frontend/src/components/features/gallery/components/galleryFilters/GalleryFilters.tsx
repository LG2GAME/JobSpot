import { Button } from "@components/common";
import * as style from "./galleryFilters.css";

interface FiltersProps {
  options: { id: string; label: string }[];
  selected: string | null;
  onSelect: (id: string) => void;
}

const GalleryFilters = ({ options, selected, onSelect }: FiltersProps) => {
  return (
    <div className={style.filtersWrapper}>
      {options.map(({ id, label }) => (
        <Button
          key={id}
          theme={selected === id ? "border" : "darkGhost"}
          onClick={() => onSelect(id)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default GalleryFilters;
