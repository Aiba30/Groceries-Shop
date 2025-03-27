import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function Filter() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const applyFilter = () => {
    // Здесь вы можете применить логику фильтрации по цене
    console.log("Filter applied:", priceRange);
  };

  const clearFilter = () => {
    setPriceRange([0, 1000]);
    setMinPrice(0);
    setMaxPrice(1000);
  };

  return (
    <div>
      <h2>Фильтр по цене</h2>

      <Slider
        min={0}
        max={1000}
        range
        step={10}
        value={priceRange}
        onChange={handleSliderChange}
      />

      <div>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span> - </span>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <button onClick={applyFilter}>Применить</button>
        <button onClick={clearFilter}>Очистить</button>
      </div>
    </div>
  );
}
