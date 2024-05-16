import { Product } from "../models/product.model";

type ProductItemProps = Product & {
  handleChangePerson: (data: Product) => void;
};

const ProductItem = ({
  productName,
  description,
  handleChangePerson,
}: ProductItemProps) => {
  return (
    <div>
      <p>{productName}</p>
      <p>{description}</p>
      <button
        onClick={() =>
          handleChangePerson({
            productName: "Duyen Tran",
            description: "Learn React",
          })
        }
      >
        ChangePerson
      </button>
    </div>
  );
};

export default ProductItem;
