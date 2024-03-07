import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDocumentScanner,
} from "react-icons/md";

export const menu = [
  {
    title: "Paginas Principais",
    list: [
      {
        title: "Inicio",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Clientes",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Processos",
        path: "/dashboard/products",
        icon: <MdDocumentScanner />,
      },
    ],
  },

  {
    title: "Administrativo",
    list: [
      {
        title: "Usuarios",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
      {
        title: "Configurações",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ajuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const processTable = [
  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },
  {
    processNumber: "1002031",
    processType: "Criminal Civil",
    processCity: "São Paulo",
    processClient: "Regina Maria",
    oppositePartyProcess: "PrestContas",
  },
  {
    processNumber: "1002032",
    processType: "Trabalhista Civil",
    processCity: "João Pessoa",
    processClient: "Maria Elena",
    oppositePartyProcess: "INSS",
  },

  {
    processNumber: "1002033",
    processType: "Civil/Ação Cautelar",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira - JUrid",
  },

  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },

  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },

  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },

  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },

  {
    processNumber: "1002030",
    processType: "Criminal",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    oppositePartyProcess: "Samira Costa",
  },
];

export const userTable = [
  {
    name: "Flavia Regina",
    contact: "regina@email.com",
    processCity: "São Paulo",
    processClient: "1002030",
  },
  {
    name: "Regina Maria",
    contact: "regina@email.com",
    processCity: "São Paulo",
    processClient: "1002030",
  },
  {
    name: "JUrid Contabilidade",
    contact: "regina@email.com",
    processCity: "São Paulo",
    processClient: "1002030",
  },
  {
    name: "Flavia Regina",
    contact: "regina@email.com",
    processCity: "São Paulo",
    processClient: "1002030",
  },
];
