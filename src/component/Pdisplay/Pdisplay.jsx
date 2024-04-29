import "./Pdisply.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
const Pdisplay = (i) => {
  const { product } = i;
  const {addtocart}=useContext(ShopContext)
  return (
    <div className="pdisplay">
      <div className="left">
        <div className="image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="pdispaly-img">
          <img src={product.image} className="pdisplay-main" alt="main" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="old-price">GH{product.old_price}</div>
          <div className="new-price"> GH{product.new_price}</div>
        </div>
        <div className="discription">this is a static description</div>
        <div className="size">
          <h1>Select size</h1>
        </div>
        <div className="psize">
          <div>s</div>
          <div>m</div>
          <div>l</div>
          <div>xl</div>
          <div>xxl</div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>Add to cart</button>
        <p className="category">
          <span>Category :</span> Women , T-Shirt , Crop Top
        </p>
        <p className="tag">
          <span>Tags :</span>Modern ,Latest
        </p>
      </div>
    </div>
  );
};

export default Pdisplay;
