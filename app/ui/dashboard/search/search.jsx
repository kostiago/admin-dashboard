"use client";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
const Search = ({ width }) => {
  return (
    <div>
      <div className={styles.search} style={{ width: width }}>
        <input
          type="text"
          placeholder="Pesquise um cliente..."
          className={styles.input}
        />

        <MdSearch size={20} color="#fff" />
      </div>
    </div>
  );
};

export default Search;
