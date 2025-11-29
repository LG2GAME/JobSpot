import { Card, Button } from "@components/common";
import * as style from "./galleryCard.css";
import { icon } from "@assets/icons";
import type { Offer } from "@ltypes";

interface GalleryCardProps {
  offer: Offer;
}

const formatFirstPart = (value: string) => {
  if (!value.includes(",")) return value.trim();
  return value.split(",")[0].trim();
};

const GalleryCard = ({ offer }: GalleryCardProps) => {
  return (
    <Card type="default" dest="gallery">
      <div className={style.header}>
        <img className={style.logo} src={offer.logo} alt={offer.title} />
        <div className={style.info}>
          <h3 className={style.title}>{offer.title}</h3>
          <p className={style.company}>{offer.company}</p>
        </div>
        <p className={style.date}>{offer.date}</p>
      </div>

      <p className={style.description}>{offer.description}</p>

      <div className={style.footer}>
        <Button theme="borderSm" href={offer.jobLink}>
          Aplikuj
        </Button>
        <div className={style.footerWrapper}>
          <p className={style.footerInfo}>
            <img
              className={style.jobIcon}
              src={icon.jobLocalisation}
              alt={offer.location}
            />
            {formatFirstPart(offer.location ?? "")}
          </p>
          <p className={style.footerInfo}>
            <img
              className={style.jobIcon}
              src={icon.jobTime}
              alt={offer.jobType}
            />
            {formatFirstPart(offer.jobType ?? "")}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GalleryCard;
