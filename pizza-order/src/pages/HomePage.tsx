import { useState } from "react";
import CardItem from "../sections/CardItem";
import { Product } from "../models/product.model";
import ProductItem from "../sections/ProductItem";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, title: "Pizza Thit Bam", description: "Thit bam, sot ca chua" },
    { id: 2, title: "Pizza Pho Mai", description: "Pho mai, muoi" },
    { id: 3, title: "Pizza Hai San", description: "Hai san, tom, cua" },
  ]);

  const handleRemoveProduct = (id: number) => {
    const indexProduct = products.findIndex((item) => item.id === id);
    const newProducts = [...products];
    newProducts.splice(indexProduct, 1);
    setProducts(newProducts);
  };

  return (
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflowY: "auto",
      }}
    >
      <div className="wrapper-card-items">
        {products.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setProducts([
            ...products,
            { id: 4, title: "Pizza 4", description: "Pizza 4" },
          ])
        }
      >
        Increase
      </button>
    </div>
  );
};

export default HomePage;
