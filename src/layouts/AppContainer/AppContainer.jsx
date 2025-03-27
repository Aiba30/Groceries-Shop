import styles from "./appContainer.module.scss";
export function AppContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
