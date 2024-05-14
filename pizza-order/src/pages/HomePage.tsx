import { useEffect, useState } from "react";
import CardItem from "../sections/CardItem";
import { Product } from "../models/product.model";
import CountProduct from "../sections/CountProduct";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflowY: "auto",
      }}
    >
      <div className="wrapper-card-items">
        {products.map((item, index) => (
          <CardItem
            key={index}
            id={item.id}
            productName={item.productName}
            description={item.description}
          />
        ))}
      </div>
      <button onClick={() => setIsCount(true)}>Open Count</button>
      <button onClick={() => setIsCount(false)}>Close Count</button>
      <div>{count}</div>
      {isCount && <CountProduct count={count} setCount={setCount} />}
    </div>
  );
};

export default HomePage;
