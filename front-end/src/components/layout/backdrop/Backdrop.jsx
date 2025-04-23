import "./Backdrop.scss";
import backdropImage from "@assets/images/ellipse.png";

export default function Backdrop() {
  return (
    <div
      className="backdrop"
      style={{ backgroundImage: `url(${backdropImage})` }}
    ></div>
  );
}

export function SmallBackdrop() {
  return (
    <div
      className="backdrop backdrop--small"
      style={{ backgroundImage: `url(${backdropImage})` }}
    ></div>
  );
}
