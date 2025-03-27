import styles from "./hero.module.scss";
import MainImg from "@/assets/images/hero__img.png";
export function Hero() {
  return (
    <section className={styles.hero}>
      <img src={MainImg} alt="main-img" />
      <h1 className={styles.title}>Доставка бесплатно от 1000 ₽</h1>
    </section>
  );
}
