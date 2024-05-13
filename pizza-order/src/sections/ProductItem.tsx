import { Product } from "../models/product.model";

type ProductItemProps = Product & {
  handleChangePerson: (data: Product) => void;
};

const ProductItem = ({
  title,
  description,
  handleChangePerson,
}: ProductItemProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button
        onClick={() =>
          handleChangePerson({
            title: "Duyen Tran",
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
