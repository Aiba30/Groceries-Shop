import { useNavigate } from "react-router-dom";
import styles from "./article.module.scss";

export function Article({ id, image, articleDate, title, desc }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="img" />
      </div>
      <div>
        <p>{articleDate}</p>
        <h6>{title}</h6>
        <p className={styles.description}>{desc}</p>
        <button onClick={() => navigate(`/article/${id}`)}>Подробнее</button>
      </div>
    </div>
  );
}
