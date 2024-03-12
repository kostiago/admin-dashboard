import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/logo.svg"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <h3 className={styles.username}>CUBOS</h3>
          <span className={styles.userTitle}>Gerenciamento de clientes</span>
        </div>
      </div>
      <span>Copyright ©2024 CUBOS All rights reserved</span>
    </footer>
  );
};

export default Footer;
