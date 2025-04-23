export const handleCheckboxChangeFactory = (
  selectedFilters,
  setSelectedFilters
) => {
  return (category, option) => {
    setSelectedFilters((prev) => {
      const prevOptions = prev[category] || [];
      const isSelected = prevOptions.includes(option);

      const updatedOptions = isSelected
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option];

      const updatedFilters = {
        ...prev,
        [category]: updatedOptions,
      };

      console.log(
        `${category} => ${
          updatedOptions.length ? updatedOptions.join(", ") : "nic nie wybrano"
        }`
      );

      return updatedFilters;
    });
  };
};
