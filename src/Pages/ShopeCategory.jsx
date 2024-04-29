import { useContext } from "react";
import "./shopecategory.css";
import { ShopContext } from "../component/Context/ShopContext";
import dropdown_icon from "../component/assets/dropdown_icon.png";
import Item from "../component/Item/Item";

const ShopeCategory = (a) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="ShopeCategory">
      <img className="shopecatbanner" src={a.banner} alt="banner" />
      <div className="shopecategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopecategory-Sort">
          Sort by <img src={dropdown_icon} alt="dropdown-icon" />
        </div>
      </div>
      <div className="shopecategory-product">
        {all_product.map((i, props) => {
          if (a.category === i.category) {
            return (
              <Item
                key={props}
                id={i.id}
                name={i.name}
                image={i.image}
                new_price={i.new_price}
                old_price={i.old_price}
              />
            );
          }
        })}
      </div>
      <div className="loadmore">Explore more</div>
    </div>
  );
};

export default ShopeCategory;
