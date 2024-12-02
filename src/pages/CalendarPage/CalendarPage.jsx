import styles from './CalendarPage.module.css'; 
import Calendar from "../../components/Calendar/Calendar.jsx";

const CalendarPage = () => {

    return (
      <div className={styles.container}>
<h1>Calendar</h1>
<Calendar className={styles.calendar}/>
      </div>
    );
  };
  export default CalendarPage;