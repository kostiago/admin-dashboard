import ProcessTable from "../ui/dashboard/processtable/processTable";
import styles from "./login.module.css";
import { MdSearch, MdArrowUpward } from "react-icons/md";

import { processTable } from "../data";
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

const Login = () => {
  return (
    <div>
      <ProcessTable data={processTable} columns={COLUMNS} />
    </div>
  );
};

export default Login;
