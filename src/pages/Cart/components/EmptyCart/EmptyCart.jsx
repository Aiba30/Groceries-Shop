import styles from "./emptyCart.module.scss";
import EmptyImg from "@/assets/icons/empty_cart.svg";
export function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <img src={EmptyImg} alt="empty-cart" />
      <h3>Корзина пуста</h3>
      <p>Добавьте товары, чтобы оформить заказ</p>
    </div>
  );
}
