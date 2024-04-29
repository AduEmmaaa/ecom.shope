import { useContext } from "react";
import { ShopContext } from "../component/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import Pdisplay from "../component/Pdisplay/Pdisplay";
import Description from "../component/Description/Description";
import RelatedProduct from "../component/RelatedProduct/RelatedProduct";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();
  const product = all_product.find((e) => e.id === Number(productid));
  return (
    <div>
      <Breadcrums product={product} />
      <Pdisplay product={product} />
      <Description />
      <RelatedProduct/>
    </div>
  );
};

export default Products;
