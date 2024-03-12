"use client";

import styles from "./rightbar.module.css";
import { MdSearch } from "react-icons/md";
import { userTable } from "../../../data";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Accordion from "../../accordion/accordion";

const RightBar = () => {
  const [accordionStatus, setAccordionStatus] = useState(
    new Array(userTable.length).fill(false)
  );

  const handleClick = (id) => {
    const updateStatus = accordionStatus.map((status, index) => {
      if (index === id) {
        return !status;
      }

      return false;
    });

    setAccordionStatus(updateStatus);
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

      <div className={styles.wrapper}>
        {userTable.map((list, index) => {
          return (
            <Accordion
              id={index}
              key={index}
              title={list.name}
              content={list.contact}
              handleClick={handleClick}
              isOpen={accordionStatus[index]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RightBar;
