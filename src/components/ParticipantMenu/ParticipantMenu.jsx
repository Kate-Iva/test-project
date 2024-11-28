import { Link } from 'react-router-dom'; // Імпорт Link для навігації
import styles from './ParticipantMenu.module.css'; // Стилі для меню
const ParticipantMenu = () => {
  return (
    <div className={styles.participantMenu}>
      <h2>Меню Учасника</h2>
      <Link to="/olimpiada">
        <button className="menuButton">Олімпіада</button>
      </Link>
      <Link to="/result">
        <button className="menuButton">Результати</button>
      </Link>
    </div>
  );
};

export default ParticipantMenu;