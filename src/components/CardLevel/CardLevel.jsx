import { Radio } from 'antd';
import { useField } from 'formik';
import styles from './CardLevel.module.css'; 
const CardLevel = ({ label, ...props }) => {
  const [field, , helpers] = useField(props); 
  return (
    <div className={styles.container}>
             <div className={styles.wrap}>
      <span className={styles.title}>{label}</span>
 
        <Radio.Group
          {...field}
          onChange={(e) => helpers.setValue(e.target.value)} 
          value={field.value} 
        >
          <div className={styles.box}>
            <Radio value="Учень">Учень</Radio>
            <Radio value="Юніор">Юніор</Radio>
            <Radio value="Профі">Профі</Radio>
          </div>
        </Radio.Group>
      </div>
    </div>
  );
};
export default CardLevel;