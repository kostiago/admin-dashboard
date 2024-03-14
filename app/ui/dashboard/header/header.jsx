"use client";
import styles from "./header.module.css";

import { useState } from "react";
import Link from "next/link";
import Search from "../search/search";
import { IoFilterSharp } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titulo}>
          <IoFilterSharp color="#011222" size={24} />
          <p className={styles.desc}>Filtros</p>
        </div>
        <div className={styles.exportFile}>
          <button className={styles.btnExport}>
            <GrHelpBook size={18} /> <span>Ajuda</span>
          </button>
        </div>
      </div>

      <div className={styles.header}>
        <Search />

        <div>
          <select>
            <option value="">Todas as categorias</option>
            <option value="categoria1">Fisica</option>
            <option value="categoria2">Juridica</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>
        <div>
          <button>asdasdasdasdasdasd</button>
        </div>
        <div>
          <Link href="/dashboard/users/newuser">
            <button className={styles.addButton}>Cadastrar novo cliente</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
