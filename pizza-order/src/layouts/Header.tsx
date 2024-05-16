import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonField from "../components/ButtonField";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div
        style={{
          fontSize: "40px",
          fontWeight: 600
        }}
      >
        PizzaShop
      </div>
      <ButtonField onClick={() => navigate("/create-product")}>
        Create Product
      </ButtonField>
      {/* <ButtonField>
        <Link to="/create-product">Create Product</Link>
      </ButtonField> */}
    </div>
  );
};

export default Header;
