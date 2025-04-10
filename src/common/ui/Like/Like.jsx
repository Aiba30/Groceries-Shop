import { useState } from "react";
import styles from "./like.module.scss";
import HeartIcon from "@/assets/icons/heart.svg";
import RedHeartIcon from "@/assets/icons/red_heart.png";
import { useGetProductQuery } from "@/store/api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/store/slices/favoritesSlice";
export function Like({ id, children }) {
  const { data: product } = useGetProductQuery(id);
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favoritesSlice);
  const existing = favorites.find((item) => item?.id === id);
  return (
    <>
      {existing ? (
        <button
          className={children && styles.btn}
          onClick={() => dispatch(removeFromFavorites(id))}
        >
          <img className={styles.liked} src={RedHeartIcon} alt="red-heart" />
          <span>{children}</span>
        </button>
      ) : (
        <button
          className={children && styles.btn}
          onClick={() => dispatch(addToFavorites(product))}
        >
          <img className={styles.liked} src={HeartIcon} alt="heart-icon" />
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
