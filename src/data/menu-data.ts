import { IMenuDT } from "@/types/menu-d-t";

type MobileMenuItem = {
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
};

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/about-us",
  },
  {
    id: 3,
    title: "Team",
    link: "/team",
  },
  {
    id: 4,
    title: "Servizi",
    link: "/services",
  },
  {
    id: 5,
    title: "FAQ",
    link: "/faq",
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog-classic",
  },
  {
    id: 7,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 8,
    title: "Consulenza",
    link: "/get-in-touch",
  },
];

const mobile_menu_data: MobileMenuItem[] = menu_data.map((item) => ({
  id: item.id,
  title: item.title,
  link: item.link,
}));

export default menu_data;
export { mobile_menu_data };
