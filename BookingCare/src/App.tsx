import DoctorDetailPage from '@pages/doctor';
import HomePage from '@pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/doctor' element={<DoctorDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
