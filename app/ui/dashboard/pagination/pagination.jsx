import styles from "./pagination.module.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ curretPage, totalPages, setCurrentPage }) => {
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <section className={styles.container}>
      <div className={styles.pagination}>
        <div className={styles.pages}>
          <p>
            Página {curretPage} de {totalPages}
          </p>
        </div>

        <div className={styles.icons}>
          <button onClick={handleFirstPage} disabled={curretPage === 1}>
            <MdKeyboardDoubleArrowLeft size={20} />
          </button>

          <button
            onClick={() => {
              if (curretPage > 1) {
                setCurrentPage(curretPage - 1);
              }
            }}
            disabled={curretPage === 1}
          >
            <MdKeyboardArrowLeft size={20} className={styles.icon} />
          </button>

          <button className={styles.buttonPage}>{curretPage}</button>

          <button
            onClick={() => {
              console.log(curretPage, totalPages);
              if (curretPage < totalPages) {
                setCurrentPage(curretPage + 1);
              }
            }}
            disabled={curretPage === totalPages}
          >
            <MdKeyboardArrowRight size={20} className={styles.icon} />
          </button>

          <button onClick={handleLastPage} disabled={curretPage === totalPages}>
            <MdKeyboardDoubleArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
