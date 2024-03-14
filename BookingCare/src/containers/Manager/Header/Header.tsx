import '@containers/Manager/Header/Header.css';

interface HeaderManagerProps {
  onSelectOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
}

const HeaderManager: React.FC<HeaderManagerProps> = ({ onSelectOption, selectedOption }) => {
  const handleLogout = () => {
    alert('Logout Success');
  };

  return (
    <header className='header-manager-container'>
      <nav className='text-white header-manager'>
        <div className='nav-left'>
          <select className='cursor select-manager text-white text-xl' onChange={onSelectOption} value={selectedOption}>
            <option value=''>Options</option>
            <option value='All User'>All User</option>
            <option value='Create User'>Create User</option>
            <option value='Manage Doctor'>Manage Doctor</option>
            <option value='Manage Admin'>Manage Admin</option>
          </select>
        </div>
        <div className='nav-right'>
          <span>Welcome User</span>
          <button className='cursor logout-manager' onClick={handleLogout}></button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderManager;
