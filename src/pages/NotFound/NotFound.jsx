import styles from "./notFound.module.scss";

export function NotFound() {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>NotFound</h1>
    </div>
  );
}
