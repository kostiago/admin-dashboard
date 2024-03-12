"use client";
import styles from "./login.module.css";
import { userTable } from "../data";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Login = () => {
  return (
    <div className={styles.timeline}>
      {userTable.map((item, i) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.titleAccordeon} onClick={() => toggle(i)}>
              <h2>{item.name}</h2>
            </div>

            <div className={styles.contact}>
              <h3 className={styles.subtitle}>Contato</h3>
              <p className={styles.text}>{item.contact}</p>
              <a href="#" className={styles.btn}>
                ver mais
              </a>
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
  );
};

export default Login;
