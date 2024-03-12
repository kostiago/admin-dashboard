"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdNotifications, MdSearch } from "react-icons/md";
import Image from "next/image";

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
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span className={styles.username}>Tiago Costa</span>
            <span className={styles.userTitle}>Administrador</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
