import { useParams } from "react-router-dom";
import Logo from "../assets/pizza.png";
import ButtonField from "../components/ButtonField";
import { useEffect, useState } from "react";
import { Product } from "../models/product.model";
import LoadingLayout from "../layouts/LoadingLayout";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProduct(data);
        }, 1000);
      });
  }, [id]);

  return (
    <LoadingLayout loading={!product.id}>
      <article
        style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}
      >
        <img width="450px" height="450px" src={Logo} alt="logo" />
        <aside>
          <p style={{ marginBottom: "1rem" }}>
            Product name:
            <span style={{ fontSize: "24px" }}> {product.productName} </span>
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Ingredients:
            <span style={{ fontSize: "24px" }}>{product.description}</span>
          </p>
          <div style={{ display: "flex" }}>
            <ButtonField>Add to cart</ButtonField>
          </div>
        </aside>
      </article>
    </LoadingLayout>
  );
};

export default DetailProductPage;
