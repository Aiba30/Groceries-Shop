import styles from "./iconNav.module.scss";
import HeartIcon from "@/assets/icons/heart.svg";
import HeartActiveIcon from "@/assets/icons/heart_active.svg";
import OrderIcon from "@/assets/icons/order.svg";
import OrderActiveIcon from "@/assets/icons/order_active.svg";
import CartIcon from "@/assets/icons/cart.svg";
import CartActiveIcon from "@/assets/icons/cart_active.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export function IconsNav() {
  const { cartElems } = useSelector((state) => state.cartSlice);
  return (
    <nav className={styles.menu}>
      <NavLink to={"/favorites"}>
        {({ isActive }) => {
          return isActive ? (
            <>
              <img src={HeartActiveIcon} alt="heart-active" />
              <span className={styles.active}>Избранное</span>
            </>
          ) : (
            <>
              <img src={HeartIcon} alt="heart-icon" />
              <span>Избранное</span>
            </>
          );
        }}
      </NavLink>

      <NavLink to={"/orders"}>
        {({ isActive }) => {
          return isActive ? (
            <>
              <img src={OrderActiveIcon} alt="order-active" />
              <span className={styles.active}>Заказы</span>
            </>
          ) : (
            <>
              <img src={OrderIcon} alt="order-icon" />
              <span>Заказы</span>
            </>
          );
        }}
      </NavLink>

      <NavLink to={"/cart"}>
        {({ isActive }) => {
          return isActive ? (
            <>
              <img src={CartActiveIcon} alt="cart-active" />
              <span className={styles.active}>Корзина</span>
              {cartElems.length > 0 && (
                <span className={styles.cartCount}>{cartElems.length}</span>
              )}
            </>
          ) : (
            <>
              <img src={CartIcon} alt="cart-icon" />
              <span>Корзина</span>
              {cartElems.length > 0 && (
                <span className={styles.cartCount}>{cartElems.length}</span>
              )}
            </>
          );
        }}
      </NavLink>
    </nav>
  );
}
