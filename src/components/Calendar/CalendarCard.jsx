import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './CalendarCard.module.css';
const CalendarCard = () => {
  const [value, onChange] = useState(new Date()); 
  const [activeMonth, setActiveMonth] = useState(new Date()); 
  
  const tileClassName = ({ date, view }) => {
    const selectedMonth = activeMonth.getMonth(); 
    const currentMonth = date.getMonth(); 
    
    if (view === 'month' && selectedMonth !== currentMonth) {
      return styles.disabledTile; 
    }
    return null; 
  };
  
  const tileDisabled = ({ date }) => {
    const selectedMonth = activeMonth.getMonth(); 
    return date.getMonth() !== selectedMonth; 
  };
  
  const handleActiveDateChange = (newDate) => {
    setActiveMonth(newDate); 
  };
  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.calendar}
        tileClassName={tileClassName} 
        tileDisabled={tileDisabled} 
        onActiveDateChange={({ activeStartDate }) => handleActiveDateChange(activeStartDate)} 
      />
      <div className={styles.selectedDate}>
        Обрана дата: {value.toDateString()} 
      </div>
    </div>
  );
};
export default CalendarCard;