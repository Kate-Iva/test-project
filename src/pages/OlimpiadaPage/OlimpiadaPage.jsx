import CardHeader from '../../components/CardHeader/CardHeader.jsx';
import CardForm from '../../components/CardForm/CardForm.jsx';

import styles from './OlimpiadaPage.module.css'; 


const HomePage = () => {

    return (
      <div className={styles.olimpiadaPage}>
<CardHeader title="Підготовка до олімпіади"/>
<CardForm />

      </div>
    );
  };
  export default HomePage;