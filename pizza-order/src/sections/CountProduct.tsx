import { useEffect } from "react";

type CountProductProps = {
  count: number;
  setCount: (count: number) => void;
};

const CountProduct = ({ count, setCount }: CountProductProps) => {
  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, []);

  return <button onClick={() => setCount(count + 1)}>Increase</button>;
};
export default CountProduct;
