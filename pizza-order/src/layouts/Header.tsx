import ButtonField from "../components/ButtonField";

const Header = () => {
  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div style={{ fontSize: "40px", fontWeight: 600 }}>PizzaShop</div>
      <ButtonField>Create Product</ButtonField>
    </div>
  );
};

export default Header;
