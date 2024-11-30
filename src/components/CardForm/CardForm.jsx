import { Formik, Form } from 'formik';
import styles from './CardForm.module.css';
import CardType from '../../components/CardType/CardType.jsx';
import CardTime from '../../components/CardTime/CardTime.jsx';
import CardNumber from '../../components/CardNumber/CardNumber.jsx';
import CardLevel from '../../components/CardLevel/CardLevel.jsx';
import Button from '../../components/Button/Button.jsx';
import typeOptions from '../../data/typeOptions.js';
import difficultyOptions from '../../data/difficultyOptions.js';
import timeOptions from '../../data/timeOptions.js';

const CardForm = () => {
  return (
    <Formik
      initialValues={{
        trainingType: "запам'ятовування чисел",
        difficulty: 'без розряду',
        rememberTime: '5 хв',
        recallTime: '5 хв',
        rowsCount: 20,
        evaluationLevel: 'Учень',
      }}
      onSubmit={(values) => {
        console.log('Submitted values:', values); 
      }}
    >
      {({ setFieldValue }) => (
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
            options={difficultyOptions}
          />
          <CardNumber
            title="Кількість рядків:"
            name="rowsCount"
            setFieldValue={setFieldValue} 
          />
          <div className={styles.timeOptionsBlock}>
            <label htmlFor="rememberTime" className={styles.timeRemember}>
              Запам`ятати за:
            </label>
            <div className={styles.timeOptionsWrap}>
              <CardTime
                name="rememberTime"
                options={timeOptions}
              />
              <label htmlFor="recallTime" className={styles.timeRecall}>
                Згадати за:
              </label>
              <CardTime
                name="recallTime"
                options={timeOptions}
              />
            </div>
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