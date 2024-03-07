"use client";

import styles from "./rightbar.module.css";
import { MdSearch } from "react-icons/md";
import { userTable } from "../../../data";
import { useState } from "react";

const RightBar = () => {
  const [useData, setUserData] = useState(userTable);

  return (
    <section className={styles.table}>
      <div className={styles.header}>
        <h2 className={styles.title}>Clientes Recentes</h2>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Pesquise um processo..."
          className={styles.input}
        />
        <MdSearch size={20} />
      </div>

      <div>
        {useData.map((currentElem) => {
          return currentElem.name;
        })}
      </div>
    </section>
  );
};

export default RightBar;
