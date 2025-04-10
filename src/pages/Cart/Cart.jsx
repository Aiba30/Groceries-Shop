import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import { AppContainer } from "@/layouts/AppContainer";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import TrashIcon from "@/assets/icons/trash.png";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import { RemoveModal } from "@/common/ui/RemoveModal/RemoveModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { EmptyCart } from "./components/EmptyCart";

export function Cart() {
  const { cartElems } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const [prodId, setProdId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  if (!cartElems.length) {
    return (
      <main className={styles.main}>
        <Breadcrumbs
          items={[{ path: "/", label: "Главная" }, { label: "Корзина" }]}
        />
        <EmptyCart />
      </main>
    );
  }

  function getProductSums(prod) {
    if (!prod) return;
    const sum = prod.price * prod.quantity;
    const saleSum =
      prod.discountedPrice && prod.discountedPrice * prod.quantity;
    return { sum, saleSum };
  }

  function getSumOfAllProducts() {
    const sum = cartElems.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
    const saleSum = cartElems.reduce(
      (acc, prod) =>
        prod.discountedPrice
          ? acc + prod.discountedPrice * prod.quantity
          : acc + prod.price * prod.quantity,
      0
    );
    const sale = sum - saleSum;
    return { sum, saleSum, sale };
  }

  return (
    <main className={styles.main}>
      {isOpen && <RemoveModal id={prodId} closeModal={closeModal} />}
      <AppContainer>
        <div className={styles.head}>
          <Breadcrumbs
            items={[{ path: "/", label: "Главная" }, { label: "Корзина" }]}
          />
          <button
            onClick={() => {
              setIsOpen(true);
              setProdId("");
            }}
          >
            <img src={TrashIcon} alt="trash-icon" />
          </button>
        </div>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.container}>
          <div className={styles.products}>
            {cartElems.map((product) => {
              return (
                <motion.div
                  layout
                  key={product.id}
                  className={styles.cartProduct}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setProdId(product.id);
                    }}
                    className={styles.deleteBtn}
                  >
                    −
                  </button>
                  <div className={styles.left}>
                    <div className={styles.image}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.texts}>
                      <p>{product.name}</p>
                      <div className={styles.priceContainer}>
                        {product.discountedPrice ? (
                          <>
                            <p className={styles.sale}>
                              <span>{product.discountedPrice} ₽</span>
                              <span>скидочная</span>
                            </p>
                            <p className={styles.sale}>
                              <span>{product.price} ₽</span>{" "}
                              <span>обычная</span>
                            </p>
                            <p>за шт.</p>
                          </>
                        ) : (
                          <>
                            <p className={styles.sale}>{product.price} ₽</p>
                            <p>за шт.</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.right}>
                    <div className={styles.counterBtns}>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        −
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => dispatch(addToCart(product))}>
                        +
                      </button>
                    </div>
                    <p className={styles.productSum}>
                      {getProductSums(product).saleSum && (
                        <span>{getProductSums(product).saleSum} ₽</span>
                      )}
                      <span>{getProductSums(product).sum} ₽</span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className={styles.info}>
            <p>
              <span>Количество товаров: {cartElems.length}</span>
              <span>{getSumOfAllProducts().sum} ₽</span>
            </p>
            <p>
              <span>Скидка</span>
              <span className={styles.sale}>
                -{getSumOfAllProducts().sale} ₽
              </span>
            </p>
            <p>
              <span>Итог</span>
              <span className={styles.result}>
                {getSumOfAllProducts().saleSum} ₽
              </span>
            </p>
            <button onClick={() => alert("Эта возможность еще не добавлена")}>
              Оформить заказ
            </button>
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
