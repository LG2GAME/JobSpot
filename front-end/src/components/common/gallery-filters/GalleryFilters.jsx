const filters = [
  { label: "Gorące oferty", value: "hot" },
  { label: "Najnowsze oferty", value: "newest" },
  { label: "Popularne oferty", value: "popular" },
];

export const GalleryFilters = ({ activeFilter, setActiveFilter }) => (
  <div className="gallery__controls-filters">
    {filters.map((filter) => (
      <a
        key={filter.value}
        className={`btn btn-white-sh ${
          activeFilter === filter.value ? "filter-selected" : ""
        }`}
        onClick={() => setActiveFilter(filter.value)}
      >
        {filter.label}
      </a>
    ))}
  </div>
);
