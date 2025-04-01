import { AppContainer } from "@/layouts/AppContainer";
import styles from "./caregory.module.scss";
import { useParams } from "react-router-dom";
import { SaleProducts } from "./components/SaleProducts";
import { NewProducts } from "./components/NewProducts";
import { Products } from "./components/Products";
import { Filter } from "./components/Filter";
import { useState } from "react";
import { categories } from "@/constants";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";

export function Category() {
  const { id } = useParams();
  const category = categories.find((item) => item.id === +id);
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [show, setShow] = useState(false);

  const handleApplyFilter = (range) => {
    setPriceRange(range);
  };

  const handleClearFilter = () => {
    setPriceRange([0, 600]);
  };

  function render() {
    if (id === "sales") {
      return <SaleProducts minPrice={priceRange[0]} maxPrice={priceRange[1]} />;
    } else if (id === "new") {
      return <NewProducts minPrice={priceRange[0]} maxPrice={priceRange[1]} />;
    } else {
      return (
        <Products id={id} minPrice={priceRange[0]} maxPrice={priceRange[1]} />
      );
    }
  }
  const breadcrumbs = [
    { path: "/", label: "Главная" },
    category?.name
      ? { path: `category/`, label: category?.name }
      : { path: "category/", label: "Все" },
  ];

  return (
    <main>
      <AppContainer>
        <section className={styles.category}>
          <div className={styles.top}>
            {/* <div>Главное - Категория</div> */}
            <Breadcrumbs items={breadcrumbs} />
            <h1>
              {category
                ? category.name
                : id === "sales"
                ? "Акции"
                : id === "new"
                ? "Новые поступления"
                : "Все товары"}
            </h1>
            <button onClick={() => setShow(true)} className={styles.filter}>
              Фильтр
            </button>
          </div>
          <div className={styles.bottom}>
            <aside
              className={
                show ? `${styles.sideBar} ${styles.show}` : styles.sideBar
              }
            >
              <button onClick={() => setShow(false)} className={styles.close}>
                &#10060;
              </button>
              <Filter
                onApply={handleApplyFilter}
                onClear={handleClearFilter}
                initialRange={[0, 600]}
              />
            </aside>
            <div className={styles.products}>{render()}</div>
          </div>
        </section>
      </AppContainer>
    </main>
  );
}
