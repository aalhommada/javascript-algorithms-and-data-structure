import styles from "./algotitle.module.css";

export function AlgoTitle({ title }) {
  return <h2 className={styles.algotitle}>{title}</h2>;
}
