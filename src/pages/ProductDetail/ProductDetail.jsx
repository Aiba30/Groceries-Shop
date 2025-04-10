import { AppContainer } from "@/layouts/AppContainer";
import styles from "./productDetail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { Loader } from "@/common/ui/Loader";

export function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductQuery(id);
  const { cartElems } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: response, isLoading: isProductsLoading } = useGetProductsQuery(
    {
      categoryId: product?.categoryId,
      page: 2,
      perPage: 4,
    },
    {
      skip: !product?.categoryId,
    }
  );
  const products = response?.data || [];

  if (isLoading)
    return (
      <main className={styles.center}>
        <Loader />
      </main>
    );
  if (isError)
    return (
      <main className={styles.center}>
        <p>товар не загрузился</p>
      </main>
    );

  const category = categories.find((item) => item.id === product?.categoryId);
  const existingCartElem = cartElems.find((prod) => prod.id === id);

  const breadcrumbs = [
    { path: "/", label: "Главная" },
    { path: `/category/${product.categoryId}`, label: category?.name },
    { path: "/product", label: product.name },
  ];

  function getSale() {
    return (
      "-" +
      Math.round(
        ((product.price - product.discountedPrice) * 100) / product.price
      ) +
      "%"
    );
  }

  return (
    <main>
      <AppContainer>
        <section className={styles.product}>
          <div className={styles.top}>
            <Breadcrumbs items={breadcrumbs} />
            <h3 className={styles.title}>{product.name}</h3>{" "}
            <div className={styles.topBtns}>
              <p>Приобретайте товары у нас по выгодным ценам</p>
              <ShareButton />
              <Like id={id}>Добавить в избранное</Like>
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
              <AnimatePresence mode="wait">
                {!existingCartElem ? (
                  <motion.button
                    key="add"
                    onClick={() =>
                      dispatch(addToCart({ ...product, quantity: 1 }))
                    }
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={CartIcon} alt="cart-img" />
                    <span>В корзину</span>
                  </motion.button>
                ) : (
                  <motion.div
                    key="controls"
                    className={styles.toCartBtn}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p onClick={() => navigate(ROUTER_PATHS.cart)}>
                      Перейти в корзину
                    </p>
                    <div>
                      <span
                        onClick={() => dispatch(addToCart(product))}
                        className={styles.increment}
                      >
                        +
                      </span>
                      <span>{existingCartElem?.quantity}</span>
                      <span
                        onClick={() => dispatch(removeFromCart(id))}
                        className={styles.decrement}
                      >
                        −
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <p className={styles.desc}>{product.description}</p>
            </div>
          </div>
        </section>

        <section className={styles.sameProducts}>
          <h3 className={styles.title}>Похожие товары</h3>
          <div className={styles.productsWrap}>
            {isProductsLoading ? (
              <Loader />
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                  name={product.name}
                />
              ))
            )}
          </div>
        </section>
      </AppContainer>
    </main>
  );
}
