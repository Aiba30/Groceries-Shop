import { useDispatch } from "react-redux";
import styles from "./removeModal.module.scss";
import { clearCart, deleteCartItem } from "@/store/slices/cartSlice";
import { motion } from "framer-motion";

export function RemoveModal({ id, closeModal }) {
  const dispatch = useDispatch();

  function deleteItem() {
    closeModal();
    dispatch(deleteCartItem(id));
  }

  function clear() {
    closeModal();
    dispatch(clearCart());
  }

  return (
    <motion.div
      onClick={closeModal}
      className={styles.modalWrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button className={styles.closeBtn} onClick={closeModal}>
          ×
        </button>
        {id ? <h3>Удалить товар</h3> : <h3>Очистить корзину</h3>}
        <hr />
        <p>
          {id
            ? "Вы точно хотите удалить данный товар? Отменить данное действие будет невозможно."
            : "Вы точно хотите очистить корзину? Отменить данное действие будет невозможно."}
        </p>
        <button onClick={id ? deleteItem : clear}>
          {id ? "удалить товар" : "очистить корзину"}
        </button>
      </motion.div>
    </motion.div>
  );
}
