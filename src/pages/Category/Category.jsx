import { AppContainer } from "@/layouts/AppContainer";
import styles from "./caregory.module.scss";
import { useParams } from "react-router-dom";
import { SaleProducts } from "./components/SaleProducts";
import { NewProducts } from "./components/NewProducts";
import { Products } from "./components/Products";
import { Filter } from "./components/Filter";

export function Category() {
  const { id } = useParams();

  function render() {
    return id === "sales" ? (
      <SaleProducts />
    ) : id === "new" ? (
      <NewProducts />
    ) : (
      <Products id={id} />
    );
  }

  return (
    <main>
      <AppContainer>
        <section className={styles.category}>
          <div className={styles.top}>
            <div></div>
            <h1></h1>
          </div>
          <div className={styles.bottom}>
            <aside className={styles.sideBar}>
              <Filter />
            </aside>
            <div className={styles.products}>{render()}</div>
          </div>
        </section>
      </AppContainer>
    </main>
  );
}
