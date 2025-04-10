import { Article } from "@/common/components/Article";
import styles from "./articles.module.scss";
import { articles } from "@/constants";
export function Articles() {
  return (
    <section className={styles.container}>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            id={article.id}
            image={article.image}
            articleDate={article.articleDate}
            title={article.title}
            desc={article.desc}
          />
        );
      })}
    </section>
  );
}
