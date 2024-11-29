import { Formik, Form } from 'formik';
import styles from './CardForm.module.css';
import CardType from '../../components/CardType/CardType.jsx';
import CardTime from '../../components/CardTime/CardTime.jsx';
import CardNumber from '../../components/CardNumber/CardNumber.jsx';
import CardLevel from '../../components/CardLevel/CardLevel.jsx'; 
import Button from '../../components/Button/Button.jsx';
import typeOptions from '../../data/typeOptions.js';
import difficultiOptions from '../../data/difficultiOptions.js';
import timeOptions from '../../data/timeOptions.js';
const CardForm = () => {
  return (
    <Formik
      initialValues={{
        trainingType: "запам'ятовування чисел",
        difficulty: 'без розділу',
        rememberTime: '5 хв',
        recallTime: '5 хв',
        rowsCount: 20,
        evaluationLevel: 'Учень', 
      }}
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
          <CardLevel
            label="Рівень оцінювання:"
            name="evaluationLevel" 
          />

          <CardType
            label="Розрядність:"
            name="difficulty"
            options={difficultiOptions}
          />
          <CardNumber title="Кількість рядків:" name="rowsCount" />

          <div className={styles.timeOptionsBlock}>
            <CardTime
              label="Запам'ятати за:"
              name="rememberTime"
              options={timeOptions}
            />
            <CardTime
              label="Згадати за:"
              name="recallTime"
              options={timeOptions}
            />
          </div>
          <div className={styles.btnBlock}>
            <Button type="submit" label="Старт!" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default CardForm;