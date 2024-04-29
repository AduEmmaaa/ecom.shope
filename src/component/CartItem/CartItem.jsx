import { useContext } from "react";
import "./CartItem.css";
import remove_icon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";
const CartItem = () => {
  const { all_product, cartItem, removetocart, getTotal } =
    useContext(ShopContext);
  return (
    <div className="Cartitem">
      <div className="cart-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, item) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={item}>
              <div className="cartitem-format cart-format-main">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>GH{e.new_price}</p>
                <button className="cartitem-quantity">{cartItem[e.id]}</button>
                <p>GH{e.new_price * cartItem[e.id]}</p>
                <img
                  onClick={() => {
                    removetocart(e.id);
                  }}
                  src={remove_icon}
                  alt=""
                  className="remove-btn"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-down">
        <div className="card-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>GH{getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <p>Shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <h3>Total</h3>
              <h3>GH{getTotal()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promocode enter it here</p>
          <div className="cart-promobox">
            <input type="text" placeholder="promo code " />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
