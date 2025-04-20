import catElec from "@assets/images/cat-electrician.png";
import catEngin from "@assets/images/cat-engineering.png";
import catFin from "@assets/images/cat-finance.png";
import catMkt from "@assets/images/cat-marketing.png";
import catMedia from "@assets/images/cat-media.png";
import catProd from "@assets/images/cat-product.png";
import catProj from "@assets/images/cat-projects.png";
import catServ from "@assets/images/cat-services.png";

export const categoriesData = [
  { image: catFin, header: "księgowość / finanse", text: "150 ofert" },
  { image: catProj, header: "projektowanie i rozwój", text: "150 ofert" },
  {
    image: catMkt,
    header: "marketing / sprzedaż",
    text: "150 ofert",
    setApart: true,
  },
  { image: catEngin, header: "inżynieria / architektura", text: "150 ofert" },
  { image: catMedia, header: "media / reklama / eventy", text: "150 ofert" },
  { image: catProd, header: "produkcja / operacje", text: "150 ofert" },
  { image: catServ, header: "obsługa klienta", text: "150 ofert" },
  { image: catElec, header: "elektryk / elektrotechnika", text: "150 ofert" },
];
