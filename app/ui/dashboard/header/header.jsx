"use client";
import styles from "./header.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Search from "../search/search";
import { IoFilterSharp } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Button from "../../buttons/buttons";

const Header = ({
  handleCategoryChange,
  onSearchChange,
  color,
  placeholder,
  children,
}) => {
  const handleSearchChange = (term) => {
    onSearchChange(term);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} style={{ backgroundColor: color }}>
        <div className={styles.titulo}>
          <IoFilterSharp color="#011222" size={24} />
          <p className={styles.desc}>Filtros</p>
        </div>
        <div className={styles.exportFile}>
          <label for="export-file" title="Ajuda" className={styles.btnExport}>
            <GrHelpBook size={16} />
          </label>
        </div>
      </div>

      <div className={styles.header}>
        <Search onChange={handleSearchChange} placeholder={placeholder} />

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

        {children}
      </div>
    </div>
  );
};

export default Header;
