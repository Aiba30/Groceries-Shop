import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./filter.module.scss";
export function Filter({ onApply, onClear, initialRange }) {
  const [priceRange, setPriceRange] = useState(initialRange);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleApply = () => {
    onApply(priceRange);
  };

  const handleClear = () => {
    setPriceRange(initialRange);
    onClear();
  };

  return (
    <div className={styles.filter}>
      <h5 className={styles.title}>Фильтр по цене</h5>
      <div className={styles.priceRangeWrap}>
        <p>Цена</p>
        <div className={styles.inputsWrapper}>
          <input
            type="text"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
          <span> - </span>
          <input
            type="text"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>
        <Slider
          min={0}
          max={600}
          range
          step={1}
          value={priceRange}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.btnsWrap}>
        <button onClick={handleApply}>Применить</button>
        <button onClick={handleClear}>Очистить</button>
      </div>
    </div>
  );
}
