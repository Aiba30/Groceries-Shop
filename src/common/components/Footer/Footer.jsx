import { Link, NavLink, useNavigate } from "react-router-dom";
import FooterLogo from "@/assets/icons/footer_logo.svg";
import IgIcon from "@/assets/icons/instagram.svg";
import FcIcon from "@/assets/icons/facebook.svg";
import VkIcon from "@/assets/icons/vkontakte.svg";
import styles from "./footer.module.scss";
import { AppContainer } from "@/layouts/AppContainer";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { IconsNav } from "../IconsNav";
import { Phone } from "@/common/ui/Phone";
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
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    to={ROUTER_PATHS.about}
                  >
                    О компании
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    to={ROUTER_PATHS.contacts}
                  >
                    Контакты
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    to={ROUTER_PATHS.jobs}
                  >
                    Вакансии
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    to={ROUTER_PATHS.privacyPolicy}
                  >
                    Политика обработки персональных данных
                  </NavLink>
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
            <Phone number="8 800 777 33 33" link="tel:8 800 777 33 33" />
          </div>
        </div>
      </AppContainer>
      <div className={styles.footerNav}>
        <IconsNav />
      </div>
    </footer>
  );
}
