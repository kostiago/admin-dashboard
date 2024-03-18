"use client";

import styles from "./processTable.module.css";
import { useState } from "react";
import Link from "next/link";
import { PiSealWarning } from "react-icons/pi";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import Button from "../../buttons/buttons";

const ProcessTable = ({ data, columns }) => {
  const placeholder = "Pesquise por um processo";

  const [searchTerm, setSearchTerm] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [curretPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  let results = data;

  //SEARCH
  if (searchTerm !== "") {
    results = results.filter((dataRow) => {
      return Object.values(dataRow).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase())
      );
    });
  }
  //SORTING
  if (sortColumn !== "") {
    results = results.sort((firstRow, otherRow) => {
      return firstRow[sortColumn]
        .toString()
        .localeCompare(otherRow[sortColumn].toString());
    });

    if (sortOrder === "desc") {
      results = results.reverse();
    }
  }
  //PAGINATION
  const startPoint = (curretPage - 1) * rowsPerPage;
  const endPoint = curretPage * rowsPerPage;
  const totalPages = Math.ceil(results.length / rowsPerPage);

  results = results.slice(startPoint, endPoint);

  return (
    <section className={styles.table}>
      <div className={styles.header}>
        <h2 className={styles.title}>Processos Recentes</h2>
        <div className={styles.test}>
          <Search
            placeholder={placeholder}
            width="300px"
            searchTerm={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
      </div>

      <section className={styles.CPDataTable}>
        {results.length === 0 ? (
          <div className={styles.alertContainer}>
            <div className={styles.alertBox}>
              <PiSealWarning size={100} color="#000" />
              <p>Não há processos cadastrados.</p>
              <p>Por favor, tente novamente ou adicione novos processos.</p>

              <div className={styles.linkAdd}>
                <Link href="/dashboard/users/newuser">
                  <Button rounded variant="primary">
                    Cadastrar Processo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={`columns${column.field}`}>
                    <button
                      onClick={() => {
                        if (sortColumn === column.field) {
                          if (sortOrder === "asc") {
                            setSortOrder("desc");
                          } else {
                            setSortOrder("asc");
                          }
                        } else {
                          setSortColumn(column.field);
                          setSortOrder("asc");
                        }
                      }}
                    >
                      {column.title}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {results.map((dataRow, index) => (
                <tr key={`data${index}`}>
                  {columns.map((column) => (
                    <td>{dataRow[column.field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <footer>
          <Pagination
            curretPage={curretPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            setRowsPerPage={setRowsPerPage}
            rowsPerPage={rowsPerPage}
            showCategoryFilter={false}
          />
        </footer>
      </section>
    </section>
  );
};

export default ProcessTable;
