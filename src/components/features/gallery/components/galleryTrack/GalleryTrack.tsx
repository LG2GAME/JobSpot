import * as style from "./galleryTrack.css";
import { GalleryCard } from "../";
import mockOffers from "@assets/mockDatas/mockOffers.json";

interface Props {
  galleryRef: React.RefObject<HTMLDivElement | null>;
  itemsInTotal: number;
}

const GalleryTrack = ({ galleryRef, itemsInTotal }: Props) => {
  return (
    <div ref={galleryRef} className={style.track}>
      {mockOffers.slice(0, itemsInTotal).map((offer, index) => (
        <GalleryCard key={index} offer={offer} />
      ))}
    </div>
  );
};

export default GalleryTrack;
