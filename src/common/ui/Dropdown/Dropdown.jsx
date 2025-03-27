import styles from "./dropdown.module.scss";
export function Dropdown({
  suggestions,
  activeIndex,
  onSelect,
  mouseEnter,
  mouseLeave,
}) {
  if (suggestions.length === 0) return null;

  return (
    <ul className={styles.dropdown}>
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion}
          onClick={() => onSelect(suggestion)}
          className={index === activeIndex ? styles.active : ""}
          onMouseEnter={() => mouseEnter(index)}
          onMouseLeave={() => mouseLeave(-1)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
