import { useState } from 'react';
import { useField } from 'formik';
import { Select } from 'antd';
import { AiFillCaretDown } from 'react-icons/ai';
import styles from './CardTime.module.css';
const { Option } = Select;
const CardTime = ({ label, options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(props);
  const handleChange = (value) => {
    helpers.setValue(value);
    setIsOpen(false); 
  };
  const handleDropdownVisibleChange = (open) => {
    setIsOpen(open);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <span className={styles.title}>{label}</span>
        <div className={styles.box}>
          <Select
            value={field.value}
            onChange={handleChange}
            onBlur={field.onBlur}
            className={styles.input}
            popupMatchSelectWidth={false} 
            variant={false} 
            style={{ width: '130px' }}
            dropdownStyle={{ maxHeight: '120px', overflowY: 'auto' }}
            onDropdownVisibleChange={handleDropdownVisibleChange}
            suffixIcon={<AiFillCaretDown className={`${styles.icon} ${isOpen ? styles.opened : ''}`} />}
          >
            {options.map(option => (
              <Option
                key={option.value}
                value={option.value}
                className={`${field.value === option.value ? styles.selectedOption : styles.option} ${field.value === option.value ? styles.active : ''}`}
              >
                {option.label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
export default CardTime;