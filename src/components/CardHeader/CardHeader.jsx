import styles from './CardHeader.module.css';
const CardHeader = ({ title }) => {
  return (
    <header>
      <div className={styles.flexBox}>
        <div className={styles.cardHeaderLogo}>
          <img
            src="https://memory.firm.kiev.ua/images/training_logo.svg"
            alt="logo"
          />
        </div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </header>
  );
};
export default CardHeader;