import { useState } from "react";

export default function FormSate() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const inputStyle = {
    margin: "10px",
    padding: "8px",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <label>
        First name:
        <input
          style={inputStyle}
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          style={inputStyle}
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          style={inputStyle}
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </div>
  );
}
