import { Like } from "@/common/ui/Like";
import styles from "./productCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
export function ProductCard({ id, image, price, discountedPrice, name }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartElems } = useSelector((state) => state.cartSlice);
  const productInCart = cartElems.find((prod) => prod.id === id);
  function getSale() {
    return "-" + Math.round(((price - discountedPrice) * 100) / price) + "%";
  }

  function navigateTo() {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addInCart() {
    dispatch(
      addToCart({
        id,
        image,
        price,
        discountedPrice,
        name,
        quantity: 1,
      })
    );
  }
  return (
    <div className={styles.card}>
      <div className={styles.images}>
        <img
          onClick={navigateTo}
          className={styles.productImage}
          src={image ? image : null}
          alt={name}
        />
        <Like id={id} />
        {discountedPrice && <div className={styles.sale}>{getSale()}</div>}
      </div>

      <div className={styles.content}>
        {discountedPrice ? (
          <div className={styles.prices}>
            <p className={styles.discountPrice}>
              <span>{discountedPrice} ₽</span>
              <span>со скидкой</span>
            </p>
            <p
              className={!discountedPrice ? styles.discountPrice : styles.price}
            >
              <span>{price} ₽</span>
              <span>без скибки</span>
            </p>
          </div>
        ) : (
          <p style={{ fontWeight: 700 }}>
            <span>{price} ₽</span>
          </p>
        )}

        <p onClick={navigateTo} className={styles.name}>
          {name}
        </p>

        <AnimatePresence mode="wait">
          {!productInCart ? (
            <motion.button
              key="add"
              className={styles.btn}
              onClick={addInCart}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              В корзину
            </motion.button>
          ) : (
            <motion.button
              key="controls"
              className={styles.activeBtn}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <span onClick={addInCart} className={styles.increment}>
                +
              </span>
              <span>{productInCart?.quantity}</span>
              <span
                onClick={() => dispatch(removeFromCart(id))}
                className={styles.decrement}
              >
                −
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
