import { Formik, Form } from 'formik'; 
import styles from './CardForm.module.css';
import CardType from '../../components/CardType/CardType.jsx';
import Button from '../../components/Button/Button.jsx'; 
const CardForm = () => {
  return (
    <Formik
      initialValues={{ trainingType: 'numbers' }} 
      onSubmit={(values) => {
        console.log('Submitted values:', values);
      }}
    >
      {() => (
        <Form className={styles.flexBox}>
          <CardType label="Тип тренування:" name="trainingType" />
          <Button label="Старт" />
        </Form>
      )}
    </Formik>
  );
};
export default CardForm;