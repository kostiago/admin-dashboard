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
        path: "/dashboard/process",
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
    id: 1,
    name: "Flavia Regina",
    contact: "regina@email.com",
    processCity: "São Paulo",
    processClient: "1002030",
    category: "Fisica",
  },
  {
    id: 2,
    name: "José Silva",
    contact: "jose@email.com",
    processCity: "Rio de Janeiro",
    processClient: "1002031",
    category: "Juridica",
  },
  {
    id: 3,
    name: "Ana Souza",
    contact: "ana@email.com",
    processCity: "Belo Horizonte",
    processClient: "1002032",
    category: "Fisica",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    contact: "carlos@email.com",
    processCity: "Curitiba",
    processClient: "1002033",
    category: "Juridica",
  },
  {
    id: 5,
    name: "Maria Santos",
    contact: "maria@email.com",
    processCity: "Porto Alegre",
    processClient: "1002034",
    category: "Fisica",
  },
  {
    id: 6,
    name: "Pedro Ferreira",
    contact: "pedro@email.com",
    processCity: "Salvador",
    processClient: "1002035",
    category: "Juridica",
  },
  {
    id: 7,
    name: "Juliana Oliveira",
    contact: "juliana@email.com",
    processCity: "Recife",
    processClient: "1002036",
    category: "Fisica",
  },
  {
    id: 8,
    name: "Lucas Silva",
    contact: "lucas@email.com",
    processCity: "Fortaleza",
    processClient: "1002037",
    category: "Juridica",
  },
  {
    id: 9,
    name: "Fernanda Costa",
    contact: "fernanda@email.com",
    processCity: "Manaus",
    processClient: "1002038",
    category: "Fisica",
  },
  {
    id: 10,
    name: "Rafael Almeida",
    contact: "rafael@email.com",
    processCity: "Brasília",
    processClient: "1002039",
    category: "Juridica",
  },
  {
    id: 11,
    name: "Aline Santos",
    contact: "aline@email.com",
    processCity: "Vitória",
    processClient: "1002040",
    category: "Fisica",
  },
  {
    id: 12,
    name: "Gustavo Oliveira",
    contact: "gustavo@email.com",
    processCity: "Natal",
    processClient: "1002041",
    category: "Juridica",
  },
  {
    id: 13,
    name: "Marcela Fernandes",
    contact: "marcela@email.com",
    processCity: "Maceió",
    processClient: "1002042",
    category: "Fisica",
  },
  {
    id: 14,
    name: "Rodrigo Pereira",
    contact: "rodrigo@email.com",
    processCity: "João Pessoa",
    processClient: "1002043",
    category: "Juridica",
  },
  {
    id: 15,
    name: "Cristina Lima",
    contact: "cristina@email.com",
    processCity: "Teresina",
    processClient: "1002044",
    category: "Fisica",
  },
];
