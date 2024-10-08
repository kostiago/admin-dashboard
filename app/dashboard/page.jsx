"use client";
import Card from "../ui/dashboard/card/card";
import ProcessTable from "../ui/dashboard/processtable/processTable";
import styles from "../ui/dashboard/dashboard.module.css";
import { processTable, userTable } from "../data";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import { useState } from "react";

const COLUMNS = [
  {
    title: "Nº Processo",
    field: "processNumber",
  },

  {
    title: "Tipo",
    field: "processType",
  },

  {
    title: "Cidade",
    field: "processCity",
  },

  {
    title: "Cliente",
    field: "processClient",
  },

  {
    title: "Parte contraria",
    field: "oppositePartyProcess",
  },
];

const Dashboard = () => {
  const quantUser = userTable.length;
  const quantProcess = processTable.length;

  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card type="processes" quantity={quantProcess} />
          <Card type="users" quantity={quantUser} />
        </div>

        <div className={styles.process}>
          <ProcessTable data={processTable} columns={COLUMNS} />
        </div>
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </section>
  );
};

export default Dashboard;
