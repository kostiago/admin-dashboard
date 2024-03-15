"use client";
import Table from "@/app/ui/dashboard/user/table/table";
import { userTable } from "@/app/data";
import styles from "@/app/ui/dashboard/user/user.module.css";
import Header from "@/app/ui/dashboard/header/header";
import { useState } from "react";
const COLUMNS = [
  {
    title: "ID",
    field: "id",
  },

  {
    title: "NOME/RAZÃO SOCIAL",
    field: "name",
  },

  {
    title: "CONTATO",
    field: "contact",
  },

  {
    title: "CIDADE/UF",
    field: "processCity",
  },
  {
    title: "CATEGORIA",
    field: "category",
  },

  {
    title: "AÇÕES",
    colSpan: 1,
  },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Header
          onSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      <div>
        <Table
          data={userTable}
          columns={COLUMNS}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Users;
