import { Link, NavLink, useNavigate } from "react-router-dom";
import FooterLogo from "@/assets/icons/footer_logo.svg";
import IgIcon from "@/assets/icons/instagram.svg";
import FcIcon from "@/assets/icons/facebook.svg";
import VkIcon from "@/assets/icons/vkontakte.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import styles from "./footer.module.scss";
import { AppContainer } from "@/layouts/AppContainer";
import HeartIcon from "@/assets/icons/heart.svg";
import OrderIcon from "@/assets/icons/order.svg";
import CartIcon from "@/assets/icons/cart.svg";
import { ROUTER_PATHS } from "@/routes/routerPaths";
export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <AppContainer>
        <div className={styles.footerContainer}>
          <div>
            <img
              onClick={() => navigate(ROUTER_PATHS.main)}
              src={FooterLogo}
              alt="logo"
            />
            <nav>
              <ul>
                <li>
                  <NavLink>О компании</NavLink>
                </li>
                <li>
                  <NavLink>Контакты</NavLink>
                </li>
                <li>
                  <NavLink>Вакансии</NavLink>
                </li>
                <li>
                  <NavLink>Статьи</NavLink>
                </li>
                <li>
                  <NavLink>Политика обработки персональных данных</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div>
              <Link to="https://www.instagram.com/">
                <img src={IgIcon} alt="instagram" />
              </Link>
              <Link to="https://vk.com/">
                <img src={VkIcon} alt="vkontakte" />
              </Link>
              <Link to="https://www.facebook.com/?locale=ru_RU">
                <img src={FcIcon} alt="facebook" />
              </Link>
            </div>
            <div>
              <Link to="tel:8 800 777 33 33">
                <img src={PhoneIcon} alt="phone" />
              </Link>
              <Link to="tel:8 800 777 33 33">8 800 777 33 33</Link>
            </div>
          </div>
        </div>
      </AppContainer>
      <div className={styles.footerNav}>
        <img src={HeartIcon} alt="heart-icon" />
        <img src={OrderIcon} alt="order-icon" />
        <img src={CartIcon} alt="cart-icon" />
      </div>
    </footer>
  );
}
