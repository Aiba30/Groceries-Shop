import ShareIcon from "@/assets/icons/share.svg";
import styles from "./shareButton.module.scss";
export function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Посмотрите это!",
          url: window.location.href,
        });
        console.log("Контент успешно отправлен");
      } catch (error) {
        console.error("Ошибка при отправке:", error);
      }
    } else {
      console.log("Web Share API не поддерживается");
    }
  };

  return (
    <button className={styles.btn} onClick={handleShare}>
      <img src={ShareIcon} alt="share-button" />
      <span>Поделиться</span>
    </button>
  );
}
