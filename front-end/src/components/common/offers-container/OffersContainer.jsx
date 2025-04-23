export const OfferContainer = ({ children, isColumn }) => (
  <section
    className={`offer-container ${isColumn ? "offer-container--column" : ""}`}
  >
    {children}
  </section>
);
