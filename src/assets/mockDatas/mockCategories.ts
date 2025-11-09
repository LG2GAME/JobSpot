import { image } from "@assets/images";

interface mockCategories {
  id: number;
  icon: string;
  title: string;
  offers: number;
}

export const mockCategories: mockCategories[] = [
  {
    id: 1,
    icon: image.finance,
    title: "księgowość / finanse",
    offers: 157,
  },
  {
    id: 2,
    icon: image.projects,
    title: "projektowanie i rozwój",
    offers: 156,
  },
  {
    id: 3,
    icon: image.marketing,
    title: "marketing / sprzedaż",
    offers: 155,
  },
  {
    id: 4,
    icon: image.engineering,
    title: "inżynieria / architektura",
    offers: 154,
  },
  {
    id: 5,
    icon: image.media,
    title: "media / reklama / eventy",
    offers: 153,
  },
  {
    id: 6,
    icon: image.product,
    title: "produkcja / operacje",
    offers: 152,
  },
  {
    id: 7,
    icon: image.services,
    title: "obsługa klienta",
    offers: 151,
  },
  {
    id: 8,
    icon: image.electrician,
    title: "elektryk / elektrotechnika",
    offers: 150,
  },
];
