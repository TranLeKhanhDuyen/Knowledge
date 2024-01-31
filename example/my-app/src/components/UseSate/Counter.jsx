import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return(
    <button onClick={handleClick}>
      You press me {count} times
    </button>
  )
}
