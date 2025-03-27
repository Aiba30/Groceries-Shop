import { ProductCard } from "@/common/components/ProductCard";
import styles from "./products.module.scss";
import { Link } from "react-router-dom";
import {
  useGetNewProductsQuery,
  useGetSaleProductsQuery,
} from "@/store/api/productsApi";
export function Products() {
  const { data: saleProducts } = useGetSaleProductsQuery({
    page: 1,
    perPage: 4,
  });
  const { data: newProducts } = useGetNewProductsQuery({
    page: 1,
    perPage: 4,
  });
  return (
    <section className={styles.products}>
      <div>
        <div className={styles.head}>
          <h3 className={styles.title}>Акции</h3>
          <Link to={"category/sales"} className={styles.link}>
            Все акции &gt;
          </Link>
        </div>
        <div className={styles.productWrapper}>
          {saleProducts?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                discountedPrice={product.discountedPrice}
                name={product.name}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.head}>
          <h3 className={styles.title}>Новинки</h3>
          <Link to={"category/new"} className={styles.link}>
            Все новинки &gt;
          </Link>
        </div>
        <div className={styles.productWrapper}>
          {newProducts?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                discountedPrice={product.discountedPrice}
                name={product.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
