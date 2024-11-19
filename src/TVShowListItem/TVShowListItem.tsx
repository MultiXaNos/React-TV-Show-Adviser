import s from "./style.module.css";
import { TVShow } from "../api/tv-shows";
import { SMALL_COVER_IMG_BASE_URL } from "../config";

interface TVShowListItemProps {
  tvShow: TVShow;
  onClick: (thShow: TVShow) => void;
}

export function TVShowListItem(props: TVShowListItemProps) {
  return (
    <div onClick={() => props.onClick(props.tvShow)} className={s.container}>
      <img
        alt={props.tvShow.name}
        className={s.img}
        src={SMALL_COVER_IMG_BASE_URL + props.tvShow.backdrop_path}
      />
      <div className={s.title}>{props.tvShow.name}</div>
    </div>
  );
}
