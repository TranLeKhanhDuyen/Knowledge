import { useState } from "react";
import "./App.css";

interface IFormData {
  username: string;
  password: string;
  loading?: boolean;
}

interface IFormErrors {
  username?: string;
  password?: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<IFormErrors>({});
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      ...formData,
      loading: true,
    });

    setTimeout(() => {
      console.log(formData);
      setFormData({
        ...formData,
        loading: false,
      });
    }, 2000);

    if (validateForm()) {
      console.log(formData);
    } else {
      console.error("Form validation failed");
    }
  };

  const validateForm = () => {
    const errors: IFormErrors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChangeInput}
        />
        {formErrors.username && (
          <span style={{ color: "red" }} className="error">
            {formErrors.username}
          </span>
        )}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChangeInput}
        />
        {formErrors.password && (
          <span style={{ color: "red" }} className="error">
            {formErrors.password}
          </span>
        )}
      </label>
      <input type="submit" value="Submit" />
      {formData.loading && (
        <div style={{ marginTop: 5, fontWeight: "bold" }}>Loading...</div>
      )}
    </form>
  );
};

export default App;
