import s from "./style.module.css";
import { TVShow } from "../api/tv-shows";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

interface TVShowDetailProps {
  tvShow: TVShow;
}

export function TVShowDetail(props: TVShowDetailProps) {
  const rating = props.tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{props.tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}>{Math.round(rating)}</div>
      </div>
      <div className={s.overview}>{props.tvShow.overview}</div>
    </div>
  );
}
