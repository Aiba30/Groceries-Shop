import { useState } from "react";
import styles from "./like.module.scss";
import HeartIcon from "@/assets/icons/heart.svg";
import RedHeartIcon from "@/assets/icons/red_heart.png";
export function Like({ children }) {
  const [like, setLike] = useState(false);
  return (
    <button
      className={children && styles.btn}
      onClick={() => setLike((prev) => !prev)}
    >
      {like ? (
        <img className={styles.liked} src={RedHeartIcon} alt="red-heart" />
      ) : (
        <img className={styles.liked} src={HeartIcon} alt="heart-icon" />
      )}
      <span>{children}</span>
    </button>
  );
}
