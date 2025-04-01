import { useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/search.svg";
import { Dropdown } from "@/common/ui/Dropdown";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { useDispatch } from "react-redux";
import { addProducts } from "@/store/slices/productsSlice";
import { useNavigate } from "react-router-dom";
export function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { data: suggestions = [] } = useGetProductsQuery({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addProducts(suggestions));
  }, [suggestions]);

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(inputValue)
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(e.target.value.trim() !== "");
    setActiveIndex(-1);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(filteredSuggestions[activeIndex]);
      setActiveIndex(-1);
      navigate(`/product/${filteredSuggestions[activeIndex].id}`);
    }
  };
  return (
    <div className={styles.searchWrap}>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.input}
        placeholder="Найти товар"
        type="text"
      />
      <button className={styles.searchBtn}>
        <img src={SearchIcon} alt="search-icon" />
      </button>
      {isOpen && (
        <Dropdown
          suggestions={filteredSuggestions}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          mouseEnter={setActiveIndex}
          mouseLeave={() => setActiveIndex(-1)}
        />
      )}
    </div>
  );
}
