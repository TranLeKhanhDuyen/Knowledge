import { useEffect, useRef } from "react";
import { useState } from "react";

const MyInput = ({ value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Uncomment the following line to focus the input
    // ref.current.focus();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return <input ref={ref} value={value} onChange={onChange} />;
}

export default function MyInputForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Taylor");
  const [upper, setUpper] = useState(false);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} form
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your name:
            <MyInput value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            />
            Make it uppercase
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  );
}