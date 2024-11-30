import { useState } from 'react';
import { Input, Button } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './CardNumber.module.css';
const CardNumber = ({ title, name, setFieldValue }) => {
  const [value, setValue] = useState(20);
  const handleIncrease = () => {
    if (value < 200) {
      const newValue = value + 1;
      setValue(newValue);
      setFieldValue(name, newValue); 
    }
  };
  const handleDecrease = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      setFieldValue(name, newValue); 
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <span className={styles.title}>{title}</span>
        <div className={styles.box}>
          <Button onClick={handleDecrease} icon={<AiOutlineMinus />} className={styles.buttonMinus} />
          <Input value={value} readOnly style={{ width: '305px', textAlign: 'center' }} className={`${styles.input} ${styles.inputText}`} />
          <Button onClick={handleIncrease} icon={<AiOutlinePlus />} className={styles.buttonPlus} />
        </div>
      </div>
    </div>
  );
};
export default CardNumber;