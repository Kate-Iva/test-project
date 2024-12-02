import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import OlimpiadaPage from '../src/pages/OlimpiadaPage/OlimpiadaPage.jsx';
import ResultPage from '../src/pages/ResultPage/ResultPage.jsx';
import ParticipantMenu from '../src/components/ParticipantMenu/ParticipantMenu.jsx'; 
import ParticipantPage from '../src/pages/ParticipantPage/ParticipantPage.jsx'; 
import CalendarPage from '../src/pages/CalendarPage/CalendarPage.jsx'; 
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ParticipantMenu /> 
        <div style={{ marginLeft: '0px', padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/olimpiada" element={<OlimpiadaPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/" 
            element={<ParticipantPage />} />
             
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}
export default App;