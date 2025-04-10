import { useNavigate } from "react-router-dom";
import styles from "./notFound.module.scss";
import NotFoundImg from "@/assets/icons/notFoundImage.svg";
import { ROUTER_PATHS } from "@/routes/routerPaths";
export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <img src={NotFoundImg} alt="not-found" />
      <h2>Страница не найдена</h2>
      <p onClick={() => navigate(ROUTER_PATHS.main)}>
        Попробуйте вернуться на главную
      </p>
    </div>
  );
}
