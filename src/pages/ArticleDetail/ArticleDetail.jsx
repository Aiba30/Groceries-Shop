import { AppContainer } from "@/layouts/AppContainer";
import styles from "./articleDetail.module.scss";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { useParams } from "react-router-dom";
import { articles } from "@/constants";

export default function ArticleDetail() {
  const { id } = useParams();
  const currentArticle = articles.find((item) => item.id === +id);
  console.log(currentArticle);
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: ROUTER_PATHS.article, label: "Статья" },
          ]}
        />
        <div>
          <img src={currentArticle?.image} alt="article" />
          <p>{currentArticle?.date}</p>
          <p>{currentArticle?.title}</p>
          <p>{currentArticle?.desc}</p>
        </div>
      </AppContainer>
    </main>
  );
}
