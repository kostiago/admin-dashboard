import styles from "./pagination.module.css";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  curretPage,
  totalPages,
  setCurrentPage,
  setRowsPerPage,
  rowsPerPage,
  showCategoryFilter,
}) => {
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <section className={styles.container}>
      {showCategoryFilter && (
        <div className={styles.pages}>
          <p>
            Página {curretPage} de {totalPages}
          </p>
        </div>
      )}
      <div className={styles.icons}>
        {showCategoryFilter && (
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        )}

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
    </section>
  );
};

export default Pagination;
