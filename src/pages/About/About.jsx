import { AppContainer } from "@/layouts/AppContainer";
import styles from "./about.module.scss";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import Img1 from "@/assets/icons/about_img.svg";
import Img2 from "@/assets/images/about_inner.png";
import LogoImg from "@/assets/icons/h_logo.svg";
export function About() {
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: "/about", label: "О компании" },
          ]}
        />
        <section className={styles.about}>
          <div className={styles.aboutUs}>
            <div className={styles.content}>
              <h1>О компании</h1>
              <p>
                Мы непрерывно развиваемся и работаем над совершенствованием
                сервиса, заботимся о наших клиентах, стремимся к лучшему
                будущему.
              </p>
            </div>
            <div className={styles.images}>
              <img src={Img1} alt="img" />
              <img src={Img2} alt="img" />
            </div>
          </div>
          <div className={styles.advantages}>
            <div className={styles.column}>
              <p>Мы занимаемся розничной торговлей</p>
              <p>Более 20 лет.</p>
            </div>
            <div className={styles.column}>
              <p>Основная миссия компании</p>
              <p>Максимальное качество товаров и услуг по доступной цене.</p>
            </div>
            <div className={styles.column}>
              <p>Отличительная черта нашей сети</p>
              <p>
                Здоровая и полезная продукция местного производства внаших
                магазинах.
              </p>
            </div>
          </div>
          <div className={styles.thankful}>
            <img src={LogoImg} alt="logo" />
            <div className={styles.messageBanner}>
              Спасибо за то, что вы с нами. Северяночка, везет всегда!
            </div>
          </div>
        </section>
      </AppContainer>
    </main>
  );
}
