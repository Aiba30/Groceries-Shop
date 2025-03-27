import { useState } from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/search.svg";
import { Dropdown } from "@/common/ui/Dropdown";
const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Orange",
  "Pineapple",
  "Strawberry",
];
export function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
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
