import Link from "next/link";
import menu_data from "@/data/menu-data";

const HeaderMenus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
