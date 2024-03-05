import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <section className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Total Clientes Cadastrados</span>
        <span className={styles.number}>900</span>
        <span className={styles.detail}>Saiba mais</span>
      </div>
    </section>
  );
};

export default Card;
