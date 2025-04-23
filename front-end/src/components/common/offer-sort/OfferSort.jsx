const sortOptions = [
  { label: "Najtrafniejsze", value: "accurate" },
  { label: "Najlepiej płatne", value: "best-paid" },
  { label: "Najnowsze", value: "newest" },
];

export const OfferSort = ({ activeSort, setActiveSort }) => (
  <div className="toolbar__sort">
    {sortOptions.map((sort) => (
      <a
        key={sort.value}
        className={`${activeSort === sort.value ? "sort-selected" : ""}`}
        onClick={() => setActiveSort(sort.value)}
      >
        {sort.label}
      </a>
    ))}
  </div>
);
