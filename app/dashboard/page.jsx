import Card from "../ui/dashboard/card/card";
import ProcessTable from "../ui/dashboard/processtable/processTable";
import styles from "../ui/dashboard/dashboard.module.css";
import { processTable } from "../data";

const Dashboard = () => {
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
        </div>

        <div className={styles.process}>
          <ProcessTable data={processTable} columns={COLUMNS} />
        </div>
      </div>
      <div className={styles.side}> RightBar</div>
    </section>
  );
};

export default Dashboard;
