import { AppContainer } from "@/layouts/AppContainer";
import styles from "./order.module.scss";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { ROUTER_PATHS } from "@/routes/routerPaths";

export function Orders() {
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: ROUTER_PATHS.orders, label: "Заказы" },
          ]}
        />
        <h1>Заказы</h1>
        <h2>У вас пока нет заказов</h2>
      </AppContainer>
    </main>
  );
}
