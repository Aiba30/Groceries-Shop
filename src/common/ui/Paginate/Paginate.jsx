import styles from "./paginate.module.scss";

export function Paginate({ totalPages, currentPage, handlePage }) {
  function renderPaginate() {
    const pages = [];

    pages.push(1);

    if (totalPages > 5) {
      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    } else {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <span key={`ellipsis-${index}`} className={styles.ellipsis}>
          ...
        </span>
      ) : (
        <button
          key={`page-${page}`}
          className={
            page === currentPage ? `${styles.btn} ${styles.active}` : styles.btn
          }
          onClick={() => handlePage(page)}
        >
          {page}
        </button>
      )
    );
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={() => handlePage(1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <button
        className={styles.btn}
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div className={styles.pagesContainer}>{renderPaginate()}</div>
      <button
        className={styles.btn}
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        className={styles.btn}
        onClick={() => handlePage(totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}
