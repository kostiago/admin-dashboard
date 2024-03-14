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
    title: "AÇÕES",
    colSpan: 1,
  },
];

const Users = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Header handleCategoryChange={handleCategoryChange} />
      </div>
      <div>
        <Table
          data={userTable}
          columns={COLUMNS}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Users;
