import styles from "./article.module.scss";

export function Article({ image, articleDate, title, desc }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="img" />
      </div>
      <div>
        <p>{articleDate}</p>
        <h6>{title}</h6>
        <p className={styles.description}>{desc}</p>
        <button>Подробнее</button>
      </div>
    </div>
  );
}
