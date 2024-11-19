import s from "./style.module.css";

interface LogoProps {
  image: string;
  title: string;
  subtitle: string;
}

export function Logo(props: LogoProps) {
  return (
    <>
      <div className={s.container}>
        <img src={props.image} className={s.img} />
        <span className={s.title}>{props.title}</span>
      </div>
      <span className={s.subtitle}>{props.subtitle}</span>
    </>
  );
}
