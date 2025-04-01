import { Like } from "@/common/ui/Like";
import styles from "./productCard.module.scss";
import { useNavigate } from "react-router-dom";
export function ProductCard({ id, image, price, discountedPrice, name }) {
  function getSale() {
    return "-" + Math.round(((price - discountedPrice) * 100) / price) + "%";
  }
  const navigate = useNavigate();
  function navigateTo() {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <Like />
        {discountedPrice && <div className={styles.sale}>{getSale()}</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.prices}>
          {discountedPrice && (
            <p className={styles.discountPrice}>
              <span>{discountedPrice} ₽</span>
              <span>со скидкой</span>
            </p>
          )}
          <p className={!discountedPrice ? styles.discountPrice : styles.price}>
            <span>{price} ₽</span>
            <span>без скибки</span>
          </p>
        </div>
        <p onClick={navigateTo} className={styles.name}>
          {name}
        </p>
        <button>В корзину</button>
      </div>
    </div>
  );
}
