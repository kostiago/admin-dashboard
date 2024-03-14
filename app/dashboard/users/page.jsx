import Table from "@/app/ui/dashboard/user/table/table";
import { userTable } from "@/app/data";
import styles from "@/app/ui/dashboard/user/user.module.css";
import Header from "@/app/ui/dashboard/header/header";

const Users = () => {
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>
        <Table data={userTable} columns={COLUMNS} />
      </div>
    </section>
  );
};

export default Users;
