import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/Home';
import { Login } from '@containers';
import Manager from '@containers/Manager/Manager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manager/*' element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;
