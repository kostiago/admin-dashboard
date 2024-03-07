"use client";
import { MdSearch } from "react-icons/md";
import styles from "./processTable.module.css";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const ProcessTable = ({ data, columns }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [curretPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [searchTerm, setSearchTerm] = useState("");

  let results = data;

  // SEARCH BAR
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
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Pesquise um processo..."
            className={styles.input}
            onKeyUp={(e) => setSearchTerm(e.target.value)}
          />
          <MdSearch size={20} />
        </div>
      </div>

      <section className={styles.CPDataTable}>
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
        <footer>
          <div className={styles.pagination}>
            <button
              onClick={() => {
                if (curretPage > 1) {
                  setCurrentPage(curretPage - 1);
                }
              }}
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
      </section>
    </section>
  );
};

export default ProcessTable;
