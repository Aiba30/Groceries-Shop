import { Link } from "react-router-dom";
import styles from "./breadCrumbs.module.scss";
export function Breadcrumbs({ items = [] }) {
  return (
    <nav>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <span>&gt;</span>}
            {index === items.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <Link className={styles.link} to={item.path}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
