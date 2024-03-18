"use client";
import Table from "@/app/ui/dashboard/user/table/table";
import { userTable } from "@/app/data";
import styles from "@/app/ui/dashboard/user/user.module.css";
import Header from "@/app/ui/dashboard/header/header";
import { useState } from "react";
import Button from "@/app/ui/buttons/buttons";
import { IoPersonAddOutline } from "react-icons/io5";
import Link from "next/link";
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
  const placeholder = "Pesquise por um cliente";

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
          placeholder={placeholder}
        >
          <div>
            {" "}
            <Link href="/dashboard/users/add">
              <Button rounded variant="addUser" icon={IoPersonAddOutline}>
                Cadastrar Usuario
              </Button>
            </Link>
          </div>
        </Header>
      </div>
      <div>
        <Table
          data={userTable}
          columns={COLUMNS}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          title="Relátorio de Clientes Cadastrados"
        />
      </div>
    </section>
  );
};

export default Users;
