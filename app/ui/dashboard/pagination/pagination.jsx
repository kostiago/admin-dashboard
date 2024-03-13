import styles from "./pagination.module.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
const Pagination = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button
          onClick={() => {
            if (curretPage > 1) {
              setCurrentPage(curretPage - 1);
            }
          }}
          disabled
        >
          <IoMdArrowDropleftCircle size={30} className={styles.icon} />
        </button>
        <button
          onClick={() => {
            if (curretPage < totalPages) {
              setCurrentPage(curretPage + 1);
            }
          }}
        >
          <IoMdArrowDroprightCircle size={30} className={styles.icon} />
        </button>
      </div>
    </footer>
  );
};

export default Pagination;
