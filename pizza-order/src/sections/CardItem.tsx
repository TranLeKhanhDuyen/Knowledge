import LogoPizza from "../assets/pizza.png";
import { Product } from "../models/product.model";

type CardItemProps = Product & {
  handleRemoveProduct?: (id: number) => void;
};

const CardItem = ({
  id,
  productName,
  description,
  handleRemoveProduct,
}: CardItemProps) => {
  return (
    <article className="card-items">
      <img src={LogoPizza} alt="pizza" className="card-image-pizza" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div>
          <p style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
            {productName}
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#fff",
              marginTop: ".5rem",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CardItem;
