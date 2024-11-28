import participantData from '../../data/participantData'; 
import { Table } from 'antd'; 
import styles from './ResultPage.module.css'; 
import CardHeader from '../../components/CardHeader/CardHeader.jsx';
const ResultPage = () => {
  const columns = [
    {
      title: 'Тип олімпіади',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Рівень',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Розрядність',
      dataIndex: 'difficulty',
      key: 'difficulty',
    },
    {
      title: 'Кількість рядків',
      dataIndex: 'rows',
      key: 'rows',
    },
    {
      title: 'Час проходження',
      dataIndex: 'time',
      key: 'time',
    },
  ];
  const data = participantData.attempts.map((attempt, index) => ({
    key: index, 
    type: attempt.type,
    level: attempt.level,
    difficulty: attempt.difficulty,
    rows: attempt.rows,
    time: attempt.time,
  }));
  return (
    <div className={styles.container}>
        <CardHeader title="Результати учасника:"/>
      <h1>{participantData.name}</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default ResultPage;