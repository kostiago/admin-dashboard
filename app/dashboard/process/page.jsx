"use client";

import { processTable } from "@/app/data";
import styles from "@/app/ui/dashboard/process/process.module.css";
import { useState } from "react";

import Header from "@/app/ui/dashboard/header/header";

import Button from "@/app/ui/buttons/buttons";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "@/app/ui/dashboard/user/table/table";
import Link from "next/link";
const COLUMNS = [
  {
    title: "ID",
    field: "id",
  },

  {
    title: "Nº PROCESSO",
    field: "processNumber",
  },

  {
    title: "TIPO",
    field: "processType",
  },

  {
    title: "AÇÃO DO PROCESSO",
    field: "processAction",
  },

  {
    title: "COMARCA",
    field: "judicialDistrict",
  },

  {
    title: "CIDADE/UF",
    field: "processCity",
  },
  {
    title: "CLIENTE",
    field: "processClient",
  },

  {
    title: "AÇÕES",
    colSpan: 1,
  },
];

const Process = () => {
  const placeholder = "Pesquise por um processo";

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
          placeholder={placeholder}
          color="#F2DDA4"
          onSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
        >
          <div>
            {" "}
            <Link href="/dashboard/process/add">
              <Button rounded variant="addUser" icon={AiOutlinePlus}>
                Cadastrar Processo
              </Button>
            </Link>
          </div>
        </Header>
      </div>

      <div>
        <Table
          data={processTable}
          columns={COLUMNS}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          title="Relátorio de Processos Cadastrados"
        />
      </div>
    </section>
  );
};

export default Process;
