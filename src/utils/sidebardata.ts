const sidebarData = [
  {
    text: "Dashboard",
    link: "/dashboard",
    icon: "dashboard",
  },
  {
    text: "Cards",
    link: "/cards",
    icon: "card",
    submenu: [
      { text: "Global account", link: "/globalaccount" },
      { text: "Conversions", link: "/Conversions" },
    ],
  },
  {
    text: "Settings",
    link: "/settings",
    icon: "cog",
    submenu: [
      { text: "General", link: "/settings/general" },
      { text: "Security", link: "/settings/security" },
    ],
  },
];

export default sidebarData;
