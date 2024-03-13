import './AllUsers.css';

const AllUsers = () => {
  return (
    <div className='user-manager-container'>
      <h1 className='text-3xl text-bold text-turquoise all-users-title'>
        ALL USERS
      </h1>

      <table className='all-users-table'>
        <tr className='table-tr'>
          <th className='table-th'>Email</th>
          <th className='table-th'>Fist Name</th>
          <th className='table-th'>Last Name </th>
          <th className='table-th'>Address </th>
          <th className='table-th'>Action </th>
        </tr>
        <tr className='table-tr'>
          <td className='table-td'>ex1@gmail.com</td>
          <td className='table-td'>Fn1</td>
          <td className='table-td'>Ln1</td>
          <td className='table-td'>Ad1</td>
          <td className='table-td'>Ad1</td>
        </tr>
        <tr className='table-tr'>
          <td className='table-td'>ex2@gmail.com</td>
          <td className='table-td'>Fn2</td>
          <td className='table-td'>Ln2</td>
          <td className='table-td'>Ad2</td>
          <td className='table-td'>Ad2</td>
        </tr>
        <tr className='table-tr'>
          <td className='table-td'>ex3@gmail.com</td>
          <td className='table-td'>Fn3</td>
          <td className='table-td'>Ln3</td>
          <td className='table-td'>Ad3</td>
          <td className='table-td'>Ad3</td>
        </tr>
        <tr className='table-tr'>
          <td className='table-td'>ex4@gmail.com</td>
          <td className='table-td'>Fn4</td>
          <td className='table-td'>Ln4</td>
          <td className='table-td'>Ad4</td>
          <td className='table-td'>Ad4</td>
        </tr>
      </table>
    </div>
  );
};

export default AllUsers;
