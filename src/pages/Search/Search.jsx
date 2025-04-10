import { AppContainer } from "@/layouts/AppContainer";
import styles from "./search.module.scss";
import { useLocation } from "react-router-dom";
import { ProductCard } from "@/common/components/ProductCard";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import EmptySearch from "@/assets/icons/search_empty.svg";
export function Search() {
  const { state } = useLocation();
  if (state.length < 1) {
    return (
      <main className={styles.main}>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { label: "Результаты поиска" },
          ]}
        />
        <div className={styles.empty}>
          <img src={EmptySearch} alt="empty-img" />
          <p>Ничего не найдено</p>
        </div>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { label: "Результаты поиска" },
          ]}
        />
        <section className={styles.finded}>
          <h2>Товары найденные по вашему запросу</h2>
          <div className={styles.products}>
            {state.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                  name={product.name}
                />
              );
            })}
          </div>
        </section>
      </AppContainer>
    </main>
  );
}
