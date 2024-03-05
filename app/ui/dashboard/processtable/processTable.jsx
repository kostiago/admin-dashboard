import { MdSearch, MdArrowUpward } from "react-icons/md";
import styles from "./processTable.module.css";

const ProcessTable = () => {
  return (
    <section className={styles.table}>
      <div className={styles.header}>
        <h2 className={styles.title}>Processos Recentes</h2>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Pesquise um processo..."
            className={styles.input}
          />
          <MdSearch size={20} />
        </div>
      </div>

      <section className={styles.body}>
        <table className={styles.tab}>
          <thead className={styles.thead}>
            <tr>
              <th>
                Nº Processo
                <span className={styles.icon}>
                  <MdArrowUpward />
                </span>
              </th>

              <th>
                Tipo
                <span className={styles.icon}>
                  <MdArrowUpward />
                </span>
              </th>

              <th>
                Cidade
                <span className={styles.icon}>
                  <MdArrowUpward />
                </span>
              </th>

              <th>
                Cliente
                <span className={styles.icon}>
                  <MdArrowUpward />
                </span>
              </th>

              <th>
                Parte Contrária
                <span className={styles.icon}>
                  <MdArrowUpward />
                </span>
              </th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            <tr>
              <td> 100205</td>
              <td>Civil</td>
              <td> Seoul </td>
              <td> Flávia Regina </td>
              <td>
                <p class="status delivered">Samira - Juri Vendas</p>
              </td>
            </tr>

            <tr>
              <td> 100205</td>
              <td>Civil Criminal </td>
              <td> Seoul </td>
              <td> Flávia Regina </td>
              <td>
                <p class="status delivered">Samira - Juri Vendas</p>
              </td>
            </tr>

            <tr>
              <td> 100205</td>
              <td>Civil</td>
              <td> Seoul </td>
              <td> Flávia Regina </td>
              <td>
                <p class="status delivered">Samira - Juri Vendas</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ProcessTable;
