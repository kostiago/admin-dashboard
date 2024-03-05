import Card from "../ui/dashboard/card/card";
import ProcessTable from "../ui/dashboard/processtable/processTable";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
        </div>

        <div className={styles.process}>
          <ProcessTable />
        </div>
      </div>
      <div className={styles.side}> RightBar</div>
    </section>
  );
};

export default Dashboard;
