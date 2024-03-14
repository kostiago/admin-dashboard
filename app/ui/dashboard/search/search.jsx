"use client";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pesquise um processo..."
        className={styles.input}
        onKeyUp={(e) => setSearchTerm(e.target.value)}
      />
      <MdSearch size={20} />
    </div>
  );
};

export default Search;
