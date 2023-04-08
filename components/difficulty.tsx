import style from "./difficulty.module.css";

interface DifficultyProps {
  difficulty: string;
}
export function Difficulty(props: DifficultyProps) {
  switch (props.difficulty) {
    case "easy":
      return <p className={style.easy}>{props.difficulty}</p>;
    case "medium":
      return <p className={style.medium}>{props.difficulty}</p>;
    case "hard":
      return <p className={style.hard}>{props.difficulty}</p>;
  }

  return <p>{props.difficulty}</p>;
}
