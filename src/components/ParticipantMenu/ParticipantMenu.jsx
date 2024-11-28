import { Link } from 'react-router-dom'; 
import styles from './ParticipantMenu.module.css'; 

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
      <Link to="/">
        <button className="menuButton">Home</button>
      </Link>
    </div>
  );
};

export default ParticipantMenu;