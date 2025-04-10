import { AppContainer } from "@/layouts/AppContainer";
import styles from "./header.module.scss";
import LogoImg from "@/assets/icons/h_logo.svg";
import { useState } from "react";
import { Categories } from "../Categories";
import { SearchInput } from "../SerchInput";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { IconsNav } from "../IconsNav";
export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  function handleVisibility(visible) {
    setIsVisible(visible);
  }
  const navigate = useNavigate();
  return (
    <AppContainer>
      <header className={styles.header}>
        <div
          onClick={() => navigate(ROUTER_PATHS.main)}
          className={styles.logo}
        >
          <img src={LogoImg} alt="logo" />
          <h3>СЕВЕРЯНОЧКА</h3>
        </div>
        <button
          onMouseOver={() => {
            setIsVisible((prev) => !prev);
          }}
          onMouseOut={() => {
            setIsVisible((prev) => !prev);
          }}
          className={styles.catalogBtn}
        >
          <div className={styles.burger}>
            <span />
            <span />
            <span />
          </div>
          <span>Каталог</span>
        </button>
        <SearchInput />
        <div className={styles.right}>
          <IconsNav />
        </div>
        {isVisible && <Categories handleVisibility={handleVisibility} />}
      </header>
    </AppContainer>
  );
}
