import  { useState } from 'react';

import { TiPlus, TiMinus } from "react-icons/ti";
import styles from './CardNumber.module.css'; // Стилі для компонента
const CardNumber = ({ title }) => {
  const [value, setValue] = useState(20); // Початкове значення
  const handleIncrease = () => {
    if (value < 200) {
      setValue(value + 1);
    }
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.title}>{title}</span>

        <div className={styles.inputContainer}>
          <button onClick={handleDecrease} className={styles.button}>
            <TiMinus className={styles.inputIcon}/>
          </button>
          <input
            type="number"
            value={value}
            readOnly
            className={styles.input}
            style={{ appearance: 'none' }} 
          />
          <button onClick={handleIncrease} className={styles.button}>
            <TiPlus className={styles.inputIcon}/>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardNumber;