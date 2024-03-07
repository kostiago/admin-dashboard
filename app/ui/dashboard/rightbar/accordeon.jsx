import styles from "./rightbar.module.css";

const Accordeon = ({ name, contact, processCity }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        <div className={styles.item}>
          <div className={styles.titleAccordion}>
            <span></span>
            <h2>{name}</h2>
          </div>
          <div className={styles.content}>{contact}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
