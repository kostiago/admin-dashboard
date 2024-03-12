"use client";
import {
  MdSearch,
  MdOutlineDeleteForever,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import styles from "./table.module.css";
import { useState } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";

const Table = ({ data, columns }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [curretPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [searchTerm, setSearchTerm] = useState("");

  let results = data;

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
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.header}>
          <TbGridDots color="#000" />
          <h2 className={styles.title}>Clientes Cadastrados</h2>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Pesquise um processo..."
              className={styles.input}
              onKeyUp={(e) => setSearchTerm(e.target.value)}
            />
            <MdSearch size={20} />
          </div>
          <Link href="/dashboard/users/newuser">
            <button className={styles.addButton}>Cadastrar novo cliente</button>
          </Link>
        </div>
      </div>

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={`column${column.field}`} colSpan={column.colSpan || 1}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dataRow, index) => (
              <tr key={`data${index}`}>
                {columns.map((column, columnIndex) => (
                  <td
                    key={`${index}-${columnIndex}`}
                    colSpan={column.colSpan || 1}
                  >
                    {" "}
                    {column.field
                      ? dataRow[column.field]
                      : columnIndex === columns.length - 1 && (
                          <div className={styles.buttons}>
                            <Link href="/">
                              <button
                                className={`${styles.button} ${styles.view}`}
                              >
                                <MdOutlineRemoveRedEye
                                  size={18}
                                  className={styles.icon}
                                />
                              </button>
                            </Link>

                            <button
                              className={`${styles.button} ${styles.edit}`}
                            >
                              <CiEdit size={18} className={styles.icon} />
                            </button>

                            <button
                              className={`${styles.button} ${styles.delete}`}
                            >
                              <MdOutlineDeleteForever
                                size={18}
                                className={styles.icon}
                              />
                            </button>
                          </div>
                        )}
                  </td>
                ))}
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
