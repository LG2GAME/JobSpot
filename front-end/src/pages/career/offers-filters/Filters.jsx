import { Dropdown } from "@components/common/dropdown/Dropdown";

import { filtersOptions } from "@assets/data/filtersOptions";

import "./OffersFilters.scss";
import arrowIcon from "@assets/images/up-arrow.png";

export const Filters = ({ collapsed, setCollapsed }) => (
  <div
    className={`career-filters ${collapsed ? "career-filters--collapsed" : ""}`}
  >
    <div
      className="career-filters__header"
      onClick={() => setCollapsed(!collapsed)}
    >
      <h1 className="hero-text">Filtry</h1>
      <img src={arrowIcon} alt="arrow" />
    </div>

    <Dropdown data={filtersOptions} />
  </div>
);
