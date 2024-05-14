import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();

  return <div>This is product page -{id}</div>;
};

export default DetailProductPage;
