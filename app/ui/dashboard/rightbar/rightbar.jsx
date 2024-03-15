"use client";

import styles from "./rightbar.module.css";
import { MdSearch } from "react-icons/md";
import { userTable } from "../../../data";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Accordion from "../../accordion/accordion";
import Search from "../search/search";

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

      <Search width="300px" />

      <div className={styles.wrapper}>
        {userTable.map((list, index) => {
          return (
            <Accordion
              id={index}
              key={index}
              name={list.name}
              contact={list.contact}
              city={list.processCity}
              client={list.processClient}
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
