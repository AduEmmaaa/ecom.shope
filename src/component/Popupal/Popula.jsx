import "./popula.css";
import data_product from "../assets/data";
import Item from "../Item/Item";

const Popula = () => {
  return (
    <div className="popula">
      <h1>POPULLAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((i) => {
          return (
            <Item
              key={i}
              id={i.id}
              name={i.name}
              image={i.image}
              new_price={i.new_price}
              old_price={i.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popula;
