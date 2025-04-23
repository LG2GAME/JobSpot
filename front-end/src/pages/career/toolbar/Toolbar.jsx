import { useEffect, useState } from "react";

import { Card } from "@components/common/cards/Card";
import { OfferSort } from "@components/common/offer-sort/OfferSort";

import "./Toolbar.scss";

export const Toolbar = () => {
  const [activeSort, setActiveSort] = useState("accurate");

  useEffect(() => {
    console.log("Aktywny filtr:", activeSort);
  }, [activeSort]);

  return (
    <div className="toolbar">
      <Card>
        <div className="toolbar__searchbar">
          <input
            type="text"
            placeholder="Szukaj ofert"
            className="button-text"
          />
        </div>
        <OfferSort activeSort={activeSort} setActiveSort={setActiveSort} />
      </Card>
    </div>
  );
};
