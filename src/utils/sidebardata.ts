
const sidebarData = [
  {
    text: "Dashboard",
    link: "/",
    icon: "AiFillHome",
  },
  {
    text: "Cards",
    link: "/cards",
    icon: "BsFillCreditCard2FrontFill",
    submenu: [
      { text: "Global account", link: "/globalaccount", icon: "CiCoinInsert"},
      { text: "Conversions", link: "/conversions", icon: "MdOutlineCurrencyExchange" },
    ],
  },
  {
    text: "Transfers",
    link: "/transfers",
    icon: "TbTransfer",
  },
  {
    text: "test",
    link: "",
    icon: "test"
  }
];

export default sidebarData;
