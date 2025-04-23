import { useEffect, useState } from "react";

import { OfferContainer } from "@components/common/offers-container/OffersContainer";
import { Filters } from "./Filters";
import { Offers } from "./Offers";

import { useWindowWidth } from "@hooks/useWindowWidth";

export const OffersFilters = () => {
  const [collapsed, setCollapsed] = useState(false);
  const innerWidth = useWindowWidth();

  useEffect(
    () => (innerWidth <= 992 ? setCollapsed(true) : setCollapsed(false)),
    [innerWidth]
  );

  return (
    <OfferContainer isColumn={collapsed && true}>
      <Filters collapsed={collapsed} setCollapsed={setCollapsed} />
      <Offers filtersCollapsed={collapsed} />
    </OfferContainer>
  );
};
