import styles from './CalendarPage.module.css'; 
import CalendarCard from "../../components/Calendar/CalendarCard.jsx";

const CalendarPage = () => {

    return (
      <div className={styles.container}>
<h1>Calendar</h1>
<CalendarCard className={styles.calendar}/>
      </div>
    );
  };
  export default CalendarPage;