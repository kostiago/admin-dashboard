import { useEffect, useRef, useState } from "react";
import styles from "./accordion.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({
  name,
  contact,
  city,
  client,
  handleClick,
  isOpen,
  id,
}) => {
  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header} onClick={() => handleClick(id)}>
        <div>{name}</div>
        <div>
          {isOpen ? (
            <CiCircleMinus size={24} className={styles.icon} />
          ) : (
            <CiCirclePlus size={24} className={styles.icon} />
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.timeline}>
          <div className={styles.timelineRow}>
            <div className={styles.timelineColumn}>
              <div className={styles.timelineBox}>
                <div className={styles.timelineContent}>
                  <div className={styles.contentTwo}>
                    <div>
                      <span>Contato</span>
                      <p>{contact}</p>
                    </div>

                    <div>
                      <span>Cidade</span>
                      <p>{city}</p>
                    </div>

                    <span>Parte em</span>
                    <p>{client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
