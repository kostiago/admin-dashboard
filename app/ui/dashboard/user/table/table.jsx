"use client";
import { MdOutlineDeleteForever, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiSealWarning } from "react-icons/pi";

import styles from "./table.module.css";
import { useState } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import Pagination from "../../pagination/pagination";
import { FaDownload } from "react-icons/fa";
import { BsFiletypePdf, BsFiletypeJson, BsFiletypeXml } from "react-icons/bs";

import generatePDF, { Margin } from "react-to-pdf";
import Button from "@/app/ui/buttons/buttons";

const options = {
  method: "open",
  page: {
    margin: Margin.MEDIUM,
    format: "A4",
    orientation: "portrait",
  },
};
const targetRef = () => document.getElementById("export");

const Table = ({ data, columns, selectedCategory, searchTerm, title }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [curretPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  let results = data;

  //FILTER
  results = results.filter(
    (user) => selectedCategory === "Todos" || user.category === selectedCategory
  );

  //SORTING
  if (sortColumn !== "") {
    results = results.sort((firstRow, otherRow) => {
      const firstValue = firstRow[sortColumn]
        ? firstRow[sortColumn].toString()
        : "";
      const otherValue = otherRow[sortColumn]
        ? otherRow[sortColumn].toString()
        : "";
      return firstValue.localeCompare(otherValue);
    });

    if (sortOrder === "desc") {
      results = results.reverse();
    }
  }

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

  //Pagination
  const startPoint = (curretPage - 1) * rowsPerPage;
  const endPoint = curretPage * rowsPerPage;
  const totalPages = Math.ceil(results.length / rowsPerPage);
  results = results.slice(startPoint, endPoint);

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titulo}>
          <TbGridDots color="#011222" size={24} />
          <p className={styles.desc}>
            {title}
            <strong>(Total: {data.length})</strong>
          </p>
        </div>
        <div className={styles.exportFile}>
          <label
            for="export-file"
            title="Baixar relatorio"
            className={styles.btnExport}
          >
            <FaDownload />
          </label>
          <input type="checkbox" name="" id="export-file" />
          <div className={styles.exportFilesOptions}>
            <label>Baixar como &nbsp; &#10140;</label>
            <label
              for="export-file"
              onClick={() => generatePDF(targetRef, options)}
            >
              PDF
              <BsFiletypePdf size={32} className={styles.icon} />
            </label>
            <label for="export-file">
              CSV
              <BsFiletypeJson size={32} className={styles.icon} />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        {results.length === 0 ? (
          <div className={styles.alertContainer}>
            <div className={styles.alertBox}>
              <PiSealWarning size={100} color="#000" />
              <p>Não há usuários cadastrados.</p>
              <p>Por favor, tente novamente ou adicione novos usuários.</p>
              <Link href="/dashboard/users/newuser">
                <Button rounded variant="primary">
                  Cadastrar Usuario
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <table id="export">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={`column${column.field}`}>
                    <button
                      onClick={() => {
                        const newSortOrder =
                          sortColumn === column.field
                            ? sortOrder === "asc"
                              ? "desc"
                              : "asc"
                            : "asc";
                        setSortColumn(column.field);
                        setSortOrder(newSortOrder);
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
                              <Link href="batata">
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
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Pagination
          curretPage={curretPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
          showCategoryFilter={true}
        />
      </div>
    </section>
  );
};

export default Table;
