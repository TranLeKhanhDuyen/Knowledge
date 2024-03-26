import DoctorDetailPage from '@pages/doctor-details/doctor';
import HomePage from '@pages/homepage/home';
import Login from '@pages/login/login';
import Manager from '@pages/manager/manager';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/doctor' element={<DoctorDetailPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manager/*' element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;
