import { TitleContainer } from "@components/common/headers/TitleContainer";
import { Toolbar } from "./toolbar/Toolbar";
import { OffersFilters } from "./offers-filters/OfferFilters";

export default function Career() {
  return (
    <>
      <TitleContainer>
        <h1 className="page-title">oferty pracy</h1>
      </TitleContainer>
      <Toolbar />
      <OffersFilters />
    </>
  );
}
