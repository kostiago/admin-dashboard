"use client";

import styles from "./rightbar.module.css";
import { MdSearch } from "react-icons/md";
import { userTable } from "../../../data";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const RightBar = ({ data, columns }) => {
  const [selected, setSelected] = useState();

  const [searchByLetter, setSearchByLetter] = useState("");

  let results = data;

  // SEARCH BY LETTER

  const toggle = (i) => {
    if (selected == i) {
      return setSelected();
    }
    setSelected(i);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <section className={styles.table}>
      <div className={styles.header}>
        <h2 className={styles.title}>Clientes Recentes</h2>
      </div>

      <div className={styles.searchByLetter}>
        {alphabet.split("").map((letter, index) => (
          <button
            className={`${styles.btn} ${styles.myBtn}`}
            key={index}
            onClick={() => setSearchByLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Pesquise um processo..."
          className={styles.input}
        />
        <MdSearch size={20} />
      </div>

      <div className={styles.accordion}>
        {userTable.map((item, i) => (
          <div className={styles.item}>
            <div className={styles.titleAccordeon} onClick={() => toggle(i)}>
              <h2>{item.name}</h2>

              <span>
                {selected == i ? (
                  <CiCircleMinus size={20} className={styles.icon} />
                ) : (
                  <CiCirclePlus size={20} className={styles.icon} />
                )}
              </span>
            </div>

            <div className={selected == i ? "content show" : styles.content}>
              <div className={styles.contact}>
                <h3 className={styles.subtitle}>Contato</h3>
                <p className={styles.text}>{item.contact}</p>
              </div>

              <div className={styles.city}>
                <h3 className={styles.subtitle}>Cidade</h3>
                <p className={styles.text}>{item.processCity}</p>
              </div>

              <div className={styles.process}>
                <h3 className={styles.subtitle}>Cliente em</h3>
                <p className={styles.text}>{item.processClient}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RightBar;
