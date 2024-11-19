import s from "./style.module.css";
import {
  Icon,
  StarFill,
  Star as StarEmpty,
  StarHalf,
} from "react-bootstrap-icons";

interface FiveStarRatingProps {
  rating: number;
}

export function FiveStarRating(props: FiveStarRatingProps) {
  const starList = [];
  const starFillCount: number = Math.floor(props.rating);
  const hasStartHalf: boolean = props.rating - starFillCount >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hasStartHalf ? 1 : 0);

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"start-fill" + i} />);
  }

  if (hasStartHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"start-empty" + i} />);
  }

  return <div>{starList}</div>;
}
