import { AppContainer } from "@/layouts/AppContainer";
import styles from "./productDetail.module.scss";
import { useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "@/store/api/productsApi";
import { ProductCard } from "@/common/components/ProductCard";
import { NotFound } from "../NotFound";
import { ShareButton } from "@/common/ui/ShareButton";
import { Like } from "@/common/ui/Like";
import CartIcon from "@/assets/icons/cart_btn.svg";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { categories } from "@/constants";

export function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductQuery(id);

  const { data: response } = useGetProductsQuery({
    categoryId: product?.categoryId,
    page: 2,
    perPage: 4,
  });
  const products = response?.data || [];

  if (isLoading) return <p>закгрузка...</p>;
  if (isError) return <NotFound />;

  function getSale() {
    return (
      "-" +
      Math.round(
        ((product.price - product.discountedPrice) * 100) / product.price
      ) +
      "%"
    );
  }
  const category = categories.find((item) => item.id === product.categoryId);
  const breadcrumbs = [
    { path: "/", label: "Главная" },
    { path: `/category/${product.categoryId}`, label: category.name },
    { path: "/product", label: product.name },
  ];
  return (
    <main>
      <AppContainer>
        <section className={styles.product}>
          <div className={styles.top}>
            {/* <div>Главная - Категория - Хлебобулочные - Батон нарезной</div> */}
            <Breadcrumbs items={breadcrumbs} />
            <h3 className={styles.title}>{product.name}</h3>
            <div className={styles.topBtns}>
              <p>Приобретайте товары у нас по выгодным ценам</p>
              <ShareButton />
              <Like>Добавить в избранное</Like>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.image}>
              {product.discountedPrice && <span>{getSale()}</span>}
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.content}>
              <div className={styles.prices}>
                <p className={styles.price}>
                  <span>{product.price} ₽</span>
                  <span>обычная цена</span>
                </p>
                {product.discountedPrice && (
                  <p className={styles.discountPrice}>
                    <span>{product.discountedPrice} ₽</span>
                    <span>цена со скидкой</span>
                  </p>
                )}
              </div>
              <button>
                <img src={CartIcon} alt="cart-img" />
                <span>В корзину</span>
              </button>
              <p className={styles.desc}>{product.description}</p>
            </div>
          </div>
        </section>
        <section className={styles.sameProducts}>
          <h3 className={styles.title}>Похожие товары</h3>
          <div className={styles.productsWrap}>
            {products.map((product) => {
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
