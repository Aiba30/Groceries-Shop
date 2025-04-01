import { useNavigate } from "react-router-dom";
import styles from "./dropdown.module.scss";
export function Dropdown({
  suggestions,
  activeIndex,
  onSelect,
  mouseEnter,
  mouseLeave,
}) {
  const navigate = useNavigate();
  if (suggestions.length === 0) return null;
  const list = suggestions.slice(0, 5);
  return (
    <ul className={styles.dropdown}>
      {list.map((suggestion, index) => (
        <li
          key={suggestion.id}
          onClick={() => {
            onSelect(suggestion.id);
            navigate(`product/${suggestion.id}`);
          }}
          className={index === activeIndex ? styles.active : ""}
          onMouseEnter={() => mouseEnter(index)}
          onMouseLeave={() => mouseLeave(-1)}
        >
          {suggestion.name}
        </li>
      ))}
    </ul>
  );
}
