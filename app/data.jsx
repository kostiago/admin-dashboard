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
