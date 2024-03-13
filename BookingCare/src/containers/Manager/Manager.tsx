import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import HeaderManager from './Header/Header';
import AllUsers from './AllUsers/AllUsers';
import CreateUser from './CreateUsers/CreateUser';

const Manager = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    switch (optionValue) {
      case "":
        return (navigate('/manager'))
      case "All User":
        return (navigate('/manager/all-users'))
      case "Create User":
        return (navigate('/manager/create-users'))
      default:
    }
  };

  return (
    <>
      <HeaderManager onSelectOption={handleSelectOption} selectedOption={selectedOption} /> {/* Pass selectedOption state to HeaderManager */}
      <Routes>
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-users" element={<CreateUser />} />
      </Routes>
    </>
  );
};

export default Manager;
