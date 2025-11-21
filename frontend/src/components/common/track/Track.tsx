import type React from "react";
import * as style from "./track.css";

interface TrackProps<T, P> {
  galleryRef: React.RefObject<HTMLDivElement | null>;
  items: T[];
  Wrapper: React.ComponentType<P>;
  wrapperPropsMapper: (item: T) => P;
}

const Track = <T, P>({
  galleryRef,
  items,
  Wrapper,
  wrapperPropsMapper,
}: TrackProps<T, P>) => {
  return (
    <div ref={galleryRef} className={style.track}>
      {items.map((item, index) => (
        <Wrapper key={index} {...wrapperPropsMapper(item)} />
      ))}
    </div>
  );
};

export default Track;
