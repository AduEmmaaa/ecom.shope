import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrums = (i) => {
  const { product } = i;
  return (
    <div className="Breadcrum">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
