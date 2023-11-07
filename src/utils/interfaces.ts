export interface ISidebarFormat {
  text: string,
  link: string,
  icon: string,
  submenu?: ISidebarFormat[];
}