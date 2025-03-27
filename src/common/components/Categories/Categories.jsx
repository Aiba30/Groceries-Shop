import { categories } from "@/constants";
import styles from "./categories.module.scss";
import { Link } from "react-router-dom";

export function Categories({ handleVisibility }) {
  return (
    <nav
      onMouseOver={() => handleVisibility(true)}
      onMouseOut={() => handleVisibility(false)}
      className={styles.menu}
    >
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`category/${category.id}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
