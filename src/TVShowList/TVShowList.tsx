import s from "./style.module.css";
import { TVShow } from "../api/tv-shows";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

interface TVShowListProps {
  tvShowList: TVShow[];
  onItemClick: (item: TVShow) => void;
}

export function TVShowList(props: TVShowListProps) {
  return (
    <div>
      <div className={s.title}>You may also like :</div>
      <div className={s.list}>
        {props.tvShowList.map((item: TVShow) => {
          return (
            <span key={item.id} className={s.tv_show_list_item}>
              <TVShowListItem tvShow={item} onClick={props.onItemClick} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
