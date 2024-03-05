"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdNotifications, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Digite algo..."
            className={styles.input}
          />
          <MdSearch />
        </div>
        <div className="icons">
          {" "}
          <MdNotifications size={20} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
