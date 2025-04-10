import { AppContainer } from "@/layouts/AppContainer";
import styles from "./contacts.module.scss";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { StoreFinder } from "@/common/components/StoreFinder";
import { Link } from "react-router-dom";
import HouseIcon from "@/assets/icons/house.svg";
import ProcentIcon from "@/assets/icons/procent.svg";

export function Contacts() {
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: ROUTER_PATHS.contacts, label: "Контакты" },
          ]}
        />
        <h1>Контакты</h1>
        <div className={styles.quations}>
          <div className={styles.contact}>
            <p>
              <img src={HouseIcon} alt="house-icon" />
              <span>Бухгалтерия, склад </span>
            </p>
            <Link to="tel:+7 82140 92619">+7 82140 92619</Link>
          </div>
          <div className={styles.contact}>
            <p>
              <img src={ProcentIcon} alt="procent-icon" />
              <span>Вопросы по системе лояльности</span>
            </p>
            <Link to="tel:+7 908 716 33 97">+7 908 716 33 97</Link>
          </div>
        </div>
        <StoreFinder />
      </AppContainer>
    </main>
  );
}
