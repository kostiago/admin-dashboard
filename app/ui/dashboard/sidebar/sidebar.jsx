import Image from "next/image";
import { menu } from "../../../data";
import Menu from "./menu/menu";
import styles from "./sidebar.module.css";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/group.svg"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>CUBOS</span>
          <span className={styles.userTitle}>Gerenciamento de clientes</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menu.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <Menu item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Sair
      </button>
    </section>
  );
};

export default Sidebar;
