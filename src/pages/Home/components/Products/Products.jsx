import { ProductCard } from "@/common/components/ProductCard";
import styles from "./products.module.scss";
import { Link } from "react-router-dom";
import {
  useGetNewProductsQuery,
  useGetSaleProductsQuery,
} from "@/store/api/productsApi";
import { Loader } from "@/common/ui/Loader";
export function Products() {
  const { data: salesRes, isLoading: isSalesLoading } = useGetSaleProductsQuery(
    {
      page: 1,
      perPage: 4,
    }
  );
  const saleProducts = salesRes?.data || [];

  const { data: newRes, isLoading: isNewLoading } = useGetNewProductsQuery({
    page: 3,
    perPage: 4,
  });
  const newProducts = newRes?.data || [];
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
          {isSalesLoading ? (
            <Loader />
          ) : saleProducts.length ? (
            saleProducts.map((product) => {
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
            })
          ) : (
            <p>Акций пока нет</p>
          )}
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
          {isNewLoading ? (
            <Loader />
          ) : newProducts.length ? (
            newProducts.map((product) => {
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
            })
          ) : (
            <p>Новых товаров пока нет</p>
          )}
        </div>
      </div>
    </section>
  );
}
