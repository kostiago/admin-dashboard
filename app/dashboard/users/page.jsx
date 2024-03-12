import Table from "@/app/ui/dashboard/user/table/table";
import { userTable } from "@/app/data";
import { MdSearch } from "react-icons/md";
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
    <div>
      <Table data={userTable} columns={COLUMNS} />
    </div>
  );
};

export default Users;
