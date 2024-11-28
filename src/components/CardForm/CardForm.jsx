import { Formik, Form } from 'formik';
import styles from './CardForm.module.css';
import CardType from '../../components/CardType/CardType.jsx';
import CardNumber from '../../components/CardNumber/CardNumber.jsx';
import Button from '../../components/Button/Button.jsx';

import typeOptions from '../../data/typeOptions.js';
import difficultiOptions from '../../data/difficultiOptions.js';
import timeOptions from '../../data/timeOptions.js';

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
          <CardType
            label="Тип тренування:"
            name="trainingType"
            options={typeOptions}
          />

          <CardType
            label="Розрядність:"
            name="trainingType"
            options={difficultiOptions}
          />

          <CardNumber title="Кількість рядків:" />

          <div className={styles.timeOptionsBlock}>
            <CardType
              label="Запам/’ятати за:"
              name="trainingType"
              options={timeOptions}
              
            />
            <CardType
              label="Згадати за:"
              name="trainingType"
              options={timeOptions}
              
            />
          </div>

          <div className={styles.btnBlock}>
            <Button label="Старт!" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default CardForm;
