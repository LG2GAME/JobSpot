import * as style from "./sliderProgress.css";

interface SliderProgressProps {
  offset: number;
  totalPages: number;
}

const SliderProgress = ({ offset, totalPages }: SliderProgressProps) => {
  return (
    <div className={style.sliderProgressWrapper}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={style.sliderProgressDot({
            state: index === offset ? "active" : "inactive",
          })}
        />
      ))}
    </div>
  );
};

export default SliderProgress;
