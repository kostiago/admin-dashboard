import { useEffect, useRef, useState } from "react";
import styles from "./accordion.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({ title, content, handleClick, isOpen, id }) => {
  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header} onClick={() => handleClick(id)}>
        <div>{title}</div>
        <div>
          {isOpen ? (
            <CiCircleMinus size={24} className={styles.icon} />
          ) : (
            <CiCirclePlus size={24} className={styles.icon} />
          )}
        </div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Accordion;
