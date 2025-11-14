import { Card } from "@components/common";
import * as style from "./opinionCard.css";
import { image } from "@assets/images";

interface CommentsProps {
  image?: string;
  name?: string;
  job?: string;
  comment?: string;
}

interface OpinionCardProps {
  comment: CommentsProps;
}

const OpinionCard = ({ comment }: OpinionCardProps) => {
  return (
    <Card type="default" dest="gallery">
      <div className={style.profileWrapper}>
        <img className={style.profile} src={comment.image} alt={comment.name} />
        <img className={style.apostrophe} src={image.apostrophe} />
      </div>
      <div>
        <h3 className={style.name}>{comment.name}</h3>
        <p className={style.job}>{comment.job}</p>
      </div>
      <p className={style.comment}>{comment.comment}</p>
    </Card>
  );
};

export default OpinionCard;
