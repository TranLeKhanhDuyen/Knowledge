import { useLocation } from "react-router-dom";

const CreateProductPage = () => {
  const { pathname } = useLocation();

  return <div>Product page - {pathname}</div>;
};

export default CreateProductPage;
