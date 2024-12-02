import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './CalendarCard.module.css';
const CalendarCard = () => {
  const [value, onChange] = useState(new Date()); // Вибрана дата
  const [activeMonth, setActiveMonth] = useState(new Date()); // Активний місяць для перегляду
  // Функція для визначення, чи є день доступним
  const tileClassName = ({ date, view }) => {
    const selectedMonth = activeMonth.getMonth(); // Місяць з активної дати
    const currentMonth = date.getMonth(); // Місяць з поточної дати
    // Якщо день з іншого місяця, робимо його неактивним
    if (view === 'month' && selectedMonth !== currentMonth) {
      return styles.disabledTile; // Додаємо клас для недоступних днів
    }
    return null; // Активні дні залишаються без класу
  };
  // Визначення недоступних днів
  const tileDisabled = ({ date }) => {
    const selectedMonth = activeMonth.getMonth(); // Місяць з активної дати
    return date.getMonth() !== selectedMonth; // Дні з інших місяців неактивні
  };
  // Обробник зміни активної дати (місяця)
  const handleActiveDateChange = (newDate) => {
    setActiveMonth(newDate); // Оновлюємо активну дату
  };
  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.calendar}
        tileClassName={tileClassName} // Використання кастомної функції для класів
        tileDisabled={tileDisabled} // Дні з інших місяців не клікабельні
        onActiveDateChange={({ activeStartDate }) => handleActiveDateChange(activeStartDate)} // Обробник зміни активної дати
      />
      <div className={styles.selectedDate}>
        Вибрана дата: {value.toDateString()} {/* Відображення вибраної дати */}
      </div>
    </div>
  );
};
export default CalendarCard;