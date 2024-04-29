import "./RelatedProduct.css"
import data_product from "../assets/data"
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="relatedProduct">
      <h1>Related Product</h1>
      <hr />
      <div className="related-product-item">
        {data_product.map((i,item) => {
          return (
            <Item
              key={item}
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
}

export default RelatedProduct
