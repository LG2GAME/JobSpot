export const Card = ({ children, setApart }) => (
  <div className={`card ${setApart ? "card--apart" : ""}`}>{children}</div>
);
