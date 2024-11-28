import { useState } from 'react';
import { useField } from 'formik';
import { FaChevronDown } from 'react-icons/fa'; // Іконка для стрілочки
import styles from './CardType.module.css';
const CardType = ({ label, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field] = useField(props);
  const options = [
    { value: 'numbers', label: 'Запам\'ятовування чисел' },
    { value: 'words', label: 'Запам\'ятовування слів' },
    { value: 'images', label: 'Запам\'ятовування картинок' },
  ];
  const handleSelect = (value) => {
    field.onChange({ target: { name: field.name, value } });
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{label}</span>
        <div
          className={styles.select}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          {options.find(option => option.value === field.value)?.label || options[0].label}
          <FaChevronDown className={`${styles.icon} ${isOpen ? styles.opened : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={styles.option}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CardType;