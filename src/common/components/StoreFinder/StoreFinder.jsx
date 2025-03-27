import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./storeFinder.module.scss";

const locations = {
  schelyaour: [65.198303, 57.085875],
  vertep: [64.57485, 55.76545],
  krasnobor: [64.9453, 57.3942],
  diur: [64.7343, 56.5211],
};

export function StoreFinder() {
  const [center, setCenter] = useState(locations.schelyaour);

  return (
    <section className={styles.stores}>
      <div className={styles.top}>
        <h3>Наши магазины</h3>
        <div>
          <button
            onClick={() => setCenter(locations.schelyaour)}
            className={center === locations.schelyaour ? styles.active : ""}
          >
            п.Щельяюр
          </button>
          <button
            onClick={() => setCenter(locations.vertep)}
            className={center === locations.vertep ? styles.active : ""}
          >
            д.Вертеп
          </button>
          <button
            onClick={() => setCenter(locations.krasnobor)}
            className={center === locations.krasnobor ? styles.active : ""}
          >
            с.Краснобор
          </button>
          <button
            onClick={() => setCenter(locations.diur)}
            className={center === locations.diur ? styles.active : ""}
          >
            д.Диюр
          </button>
        </div>
      </div>
      <YMaps>
        <div style={{ width: "100%", height: "400px" }}>
          <Map
            state={{
              center: center,
              zoom: 10,
            }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={center} />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}
