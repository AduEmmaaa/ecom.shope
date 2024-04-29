import { Link } from "react-router-dom";
import "./item.css";

const Item = (i) => {
  return (
    <div className="item ">
      <Link to={`/ecom.shope/product/${i.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={i.image} alt="item" />
      </Link>
      <p>{i.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">GH{i.new_price}</div>
        <div className="item-prices-old">GH{i.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
