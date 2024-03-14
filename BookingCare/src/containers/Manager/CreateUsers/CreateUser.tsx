import { TextField } from "@components";
import { TEXT_FIELD } from "@constants/textfield";
import './CreateUser.css'

const CreateUser = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className='text-3xl text-bold text-turquoise create-user-title'>CREATE USERS</h1>
      <form onSubmit={handleSubmit} className="form-create-user">
        {TEXT_FIELD.map((field, index) => (
          <TextField key={index} items={field.items} />
        ))}
        <button className="btn-create-users" type="submit">Save User</button>
      </form>
    </>
  )
}

export default CreateUser
