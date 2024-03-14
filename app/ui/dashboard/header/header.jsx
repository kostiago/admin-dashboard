"use client";
import styles from "./header.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Search from "../search/search";
import { IoFilterSharp } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";

const Header = ({ handleCategoryChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titulo}>
          <IoFilterSharp color="#011222" size={24} />
          <p className={styles.desc}>Filtros</p>
        </div>
        <div className={styles.exportFile}>
          <button>
            <GrHelpBook size={18} /> <span>Ajuda</span>
          </button>
        </div>
      </div>

      <div className={styles.header}>
        <Search />

        <div className={styles.selectContainer}>
          <select name="" id="" onChange={handleCategoryChange}>
            <option value="Todos">Todos</option>
            <option value="Fisica">Fisica</option>
            <option value="Juridica">Juridica</option>
          </select>
          <span className={styles.title}></span>
          <MdKeyboardArrowDown
            className={styles.icon}
            size={22}
            color="#39325a"
          />
        </div>
        <div>
          <button className={styles.btn}>asdasdasdasdasdasd</button>
        </div>
        <div>
          <Link href="/dashboard/users/newuser">
            <button className={styles.btn}>Cadastrar novo cliente</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
