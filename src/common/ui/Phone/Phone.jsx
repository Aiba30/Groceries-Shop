import { Link } from "react-router-dom";
import styles from "./phone.module.scss";
import PhoneIcon from "@/assets/icons/phone.svg";
export function Phone({ number, link }) {
  return (
    <div className={styles.phone}>
      <Link to={link}>
        <img src={PhoneIcon} alt="phone" />
      </Link>
      <Link to={link}>{number}</Link>
    </div>
  );
}
