import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  function submit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      props.onSubmit(e.currentTarget.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show you may like..."
        className={s.input}
      />
    </>
  );
}
