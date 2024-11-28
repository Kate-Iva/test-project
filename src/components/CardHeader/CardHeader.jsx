import styles from './CardHeader.module.css';

const CardHeader = () => {
  return (
    <header>
      <div className={styles.flexBox}>
      <div className={styles.cardHeaderLogo}>
        <img
          src="https://memory.firm.kiev.ua/images/training_logo.svg"
          alt="logo"
        >

        </img>
      </div>
      <div className={styles.cardTitle}>Підготовка до олімпіади</div>
    </div>
    </header>
  );
};
export default CardHeader;
