import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { processTable, userTable } from "@/app/data";

const Card = ({ type, quantity, backgroundColor }) => {
  return (
    <section className={`${styles.container} ${styles[type]}`}>
      <MdSupervisedUserCircle size={24} className={styles.icon} />
      <div className={styles.text}>
        <span className={styles.title}>
          {type == "users" ? "Clientes Cadastrados" : "Processos Cadastrados"}
        </span>
        <span className={styles.number}>{quantity}</span>
        <span className={styles.detail}>Saiba mais</span>
      </div>
    </section>
  );
};

export default Card;
