const Item = ({ name, isPacked }) => {
  // let itemContent = name;
  // if (isPacked) {
  //   itemContent = <del>{name + " ✔"}</del>;
  // }
  // return <li className="item">{itemContent}</li>;

  const itemContent = isPacked ? <del>{name + " ✔"}</del> : name + "❌";
  return <li className="item">{itemContent}</li>;
};

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
