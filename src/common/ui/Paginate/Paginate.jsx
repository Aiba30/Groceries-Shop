import styles from "./paginate.module.scss";

export function Paginate({ totalPages, currentPage, handlePage }) {
  function renderPaginate() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages.map((page) => {
      return (
        <button
          className={
            page === currentPage ? `${styles.btn} ${styles.active}` : styles.btn
          }
          key={page}
          onClick={() => handlePage(page)}
        >
          {page}
        </button>
      );
    });
  }
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => handlePage(1)}>
        &laquo;
      </button>

      <button
        onClick={() => currentPage > 1 && handlePage(currentPage - 1)}
        className={styles.btn}
      >
        &lt;
      </button>

      <div className={styles.pagesContainer}>{renderPaginate()}</div>

      <button
        onClick={() =>
          currentPage !== totalPages && handlePage(currentPage + 1)
        }
        className={styles.btn}
      >
        &gt;
      </button>

      <button className={styles.btn} onClick={() => handlePage(totalPages)}>
        {" "}
        &raquo;
      </button>
    </div>
  );
}
