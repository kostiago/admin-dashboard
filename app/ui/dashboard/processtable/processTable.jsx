"use client";
import { MdSearch } from "react-icons/md";
import styles from "./processTable.module.css";
import { useState } from "react";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Pagination from "../pagination/pagination";
import Search from "../search/search";

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
        <Search />
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
