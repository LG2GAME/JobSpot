import { useState } from "react";

import { handleCheckboxChangeFactory } from "@utils/dropdownUtils";

import "./Dropdown.scss";
import arrowIcon from "@assets/images/up-arrow.png";

export const Dropdown = ({ data }) => {
  const [collapsed, setCollapsed] = useState(data.map(() => false));
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = handleCheckboxChangeFactory(
    selectedFilters,
    setSelectedFilters
  );

  const toggleCollapse = (index) => {
    setCollapsed((prev) =>
      prev.map((isCollapsed, i) => (i === index ? !isCollapsed : isCollapsed))
    );
  };

  return (
    <div className="dropdown">
      {data.map((group, index) => (
        <div className="dropdown-group" key={index}>
          <div
            className={`dropdown-header ${
              collapsed[index] ? "dropdown-header--collapsed" : ""
            }`}
            onClick={() => toggleCollapse(index)}
          >
            <p className="card-header card-header--white">{group.title}</p>
            <img src={arrowIcon} alt="arrow" />
          </div>
          {!collapsed[index] && (
            <div className="dropdown-options">
              <ul>
                {group.options.map((option, optIndex) => (
                  <li key={optIndex}>
                    <label className="dropdown-option button-text">
                      <input
                        type="checkbox"
                        value={option}
                        onChange={() =>
                          handleCheckboxChange(group.title, option)
                        }
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
