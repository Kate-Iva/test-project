import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Імпорт маршрутизатора
import OlimpiadaPage from '../src/pages/OlimpiadaPage/OlimpiadaPage.jsx';
import ResultPage from '../src/pages/ResultPage/ResultPage.jsx';
import ParticipantMenu from '../src/components/ParticipantMenu/ParticipantMenu.jsx'; // Імпорт меню
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ParticipantMenu /> {/* Меню учасника зліва */}
        <div style={{ marginLeft: '0px', padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/olimpiada" element={<OlimpiadaPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/" element={<h1>Ласкаво просимо! Виберіть сторінку.</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;