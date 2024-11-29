import  { useState } from 'react';
import { Input, Button } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './CardNumber.module.css';
const CardNumber = ({ title }) => {
  const [value, setValue] = useState(20);
  const handleIncrease = () => {
    if (value < 200) setValue(value + 1);
  };
  const handleDecrease = () => {
    if (value > 1) setValue(value - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
      <span className={styles.title}>{title}</span>

      <div  className={styles.box}>
        <Button onClick={handleDecrease} icon={<AiOutlineMinus />} className={styles.buttonMinus}/>
        <Input value={value} readOnly variant={false}  style={{ width: '305px', textAlign: 'center' }} className={`${styles.input} ${styles.inputText}`}/>
        <Button onClick={handleIncrease} icon={<AiOutlinePlus />} className={styles.buttonPlus}/>
      </div>
</div>
    </div>
  );
};
export default CardNumber;