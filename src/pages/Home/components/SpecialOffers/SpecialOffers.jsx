import styles from "./specialOffers.module.scss";
import SaleProdIMG from "@/assets/images/sale_products.png";
import CardImg from "@/assets/images/card_loyal.png";
export function SpecialOffers() {
  return (
    <section>
      <h3 className={styles.title}>Специальные предложения</h3>
      <div className={styles.offersContainer}>
        <div>
          <div>
            <h5>Оформите карту «Северяночка»</h5>
            <p>И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <img src={CardImg} alt="card" />
        </div>
        <div>
          <div>
            <h5>Покупайте акционные товары</h5>
            <p>И получайте вдвое больше бонусов</p>
          </div>
          <img width={193} height={186} src={SaleProdIMG} alt="products" />
        </div>
      </div>
    </section>
  );
}
