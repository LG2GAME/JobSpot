import { Dropdown } from "@components/common/dropdown/Dropdown";

import { filtersOptions } from "@assets/data/filtersOptions";

import "./OffersFilters.scss";

export const Filters = ({ collapsed, setCollapsed }) => (
  <div
    className={`career-filters ${collapsed ? "career-filters--collapsed" : ""}`}
  >
    <h1 className="hero-text" onClick={() => setCollapsed(!collapsed)}>
      Filtry
    </h1>
    <Dropdown data={filtersOptions} />
  </div>
);
