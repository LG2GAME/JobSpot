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
