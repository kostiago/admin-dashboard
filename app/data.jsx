import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDocumentScanner,
} from "react-icons/md";

import { TbBrandWechat } from "react-icons/tb";

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
        title: "Colaboradores",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },

      {
        title: "Chat",
        path: "/dashboard/chat",
        icon: <TbBrandWechat />,
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
    id: 1,
    processNumber: "1002030",
    processType: "Criminal",
    processAction: "Agravo em execução",
    judicialDistrict: "Lins",
    processCity: "São Paulo",
    processClient: "Flavia Regina",
    status: "Em andamento",
    forum: "Forúm Hely Lope Meirelles",
    outcome: "Não cadastrado",
    resultAppeal: "Ganho",
    fee: "1.000",
    percentageFees: "10%",
    valueCause: 10000,
    oppositePartyProcess: "Samira Costa",
  },
  {
    id: 2,
    processNumber: "2003050",
    processType: "Trabalhista",
    processAction: "Reclamação Trabalhista",
    judicialDistrict: "São Paulo",
    processCity: "Campinas",
    processClient: "João Silva",
    status: "Concluído",
    forum: "Forúm Trabalhista de Campinas",
    outcome: "Procedente",
    resultAppeal: "Perda",
    fee: "2.500",
    percentageFees: "15%",
    valueCause: 15000,
    oppositePartyProcess: "Marcos Oliveira",
  },
  {
    id: 3,
    processNumber: "3004070",
    processType: "Família",
    processAction: "Divórcio",
    judicialDistrict: "Rio de Janeiro",
    processCity: "Niterói",
    processClient: "Ana Santos",
    status: "Em andamento",
    forum: "Forúm de Niterói",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "3.200",
    percentageFees: "20%",
    valueCause: 16000,
    oppositePartyProcess: "José Oliveira",
  },
  {
    id: 4,
    processNumber: "4005090",
    processType: "Cível",
    processAction: "Ação de Indenização",
    judicialDistrict: "Curitiba",
    processCity: "Curitiba",
    processClient: "Carlos Ferreira",
    status: "Em andamento",
    forum: "Forúm Cível de Curitiba",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "1.800",
    percentageFees: "12%",
    valueCause: 15000,
    oppositePartyProcess: "Luciana Mendes",
  },
  {
    id: 5,
    processNumber: "5006010",
    processType: "Administrativo",
    processAction: "Recurso Administrativo",
    judicialDistrict: "Brasília",
    processCity: "Brasília",
    processClient: "Paulo Oliveira",
    status: "Concluído",
    forum: "Conselho Administrativo de Recursos Fiscais",
    outcome: "Improcedente",
    resultAppeal: "Não aplicável",
    fee: "2.000",
    percentageFees: "18%",
    valueCause: 11000,
    oppositePartyProcess: "Fernanda Silva",
  },
  {
    id: 6,
    processNumber: "6007010",
    processType: "Tributário",
    processAction: "Recurso Tributário",
    judicialDistrict: "São Paulo",
    processCity: "São Paulo",
    processClient: "Maria Oliveira",
    status: "Concluído",
    forum: "Tribunal de Justiça de São Paulo",
    outcome: "Procedente",
    resultAppeal: "Não aplicável",
    fee: "2.300",
    percentageFees: "17%",
    valueCause: 13500,
    oppositePartyProcess: "Fernando Rodrigues",
  },
  {
    id: 7,
    processNumber: "7008020",
    processType: "Cível",
    processAction: "Ação de Despejo",
    judicialDistrict: "Rio de Janeiro",
    processCity: "Rio de Janeiro",
    processClient: "Luciana Santos",
    status: "Em andamento",
    forum: "Forúm Cível do Rio de Janeiro",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "2.800",
    percentageFees: "14%",
    valueCause: 20000,
    oppositePartyProcess: "Ricardo Almeida",
  },
  {
    id: 8,
    processNumber: "8009030",
    processType: "Família",
    processAction: "Guarda Compartilhada",
    judicialDistrict: "Belo Horizonte",
    processCity: "Contagem",
    processClient: "Pedro Oliveira",
    status: "Concluído",
    forum: "Vara da Família de Contagem",
    outcome: "Procedente",
    resultAppeal: "Não aplicável",
    fee: "3.500",
    percentageFees: "16%",
    valueCause: 22000,
    oppositePartyProcess: "Camila Costa",
  },
  {
    id: 9,
    processNumber: "9010040",
    processType: "Trabalhista",
    processAction: "Reclamatória Trabalhista",
    judicialDistrict: "São Paulo",
    processCity: "São Paulo",
    processClient: "Bruno Silva",
    status: "Em andamento",
    forum: "Forúm Trabalhista de São Paulo",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "2.000",
    percentageFees: "13%",
    valueCause: 15500,
    oppositePartyProcess: "Vanessa Oliveira",
  },
  {
    id: 10,
    processNumber: "10011050",
    processType: "Administrativo",
    processAction: "Recurso Administrativo",
    judicialDistrict: "Brasília",
    processCity: "Brasília",
    processClient: "Gabriela Ferreira",
    status: "Concluído",
    forum: "Conselho Administrativo de Recursos Fiscais",
    outcome: "Improcedente",
    resultAppeal: "Não aplicável",
    fee: "2.100",
    percentageFees: "18%",
    valueCause: 12000,
    oppositePartyProcess: "Rafaela Alves",
  },
  {
    id: 11,
    processNumber: "11012060",
    processType: "Criminal",
    processAction: "Habeas Corpus",
    judicialDistrict: "Curitiba",
    processCity: "Curitiba",
    processClient: "Mateus Santos",
    status: "Em andamento",
    forum: "Tribunal de Justiça do Paraná",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "2.700",
    percentageFees: "15%",
    valueCause: 18000,
    oppositePartyProcess: "Camila Oliveira",
  },
  {
    id: 12,
    processNumber: "12013070",
    processType: "Família",
    processAction: "Pensão Alimentícia",
    judicialDistrict: "Salvador",
    processCity: "Salvador",
    processClient: "Fernanda Lima",
    status: "Em andamento",
    forum: "Forúm de Salvador",
    outcome: "Não cadastrado",
    resultAppeal: "Não aplicável",
    fee: "3.200",
    percentageFees: "14%",
    valueCause: 23000,
    oppositePartyProcess: "Gustavo Silva",
  },
  {
    id: 13,
    processNumber: "13014080",
    processType: "Tributário",
    processAction: "Ação Tributária",
    judicialDistrict: "Porto Alegre",
    processCity: "Porto Alegre",
    processClient: "Carla Oliveira",
    status: "Concluído",
    forum: "Tribunal de Justiça do Rio Grande do Sul",
    outcome: "Improcedente",
    resultAppeal: "Não aplicável",
    oppositePartyProcess: "Não Informado",
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
