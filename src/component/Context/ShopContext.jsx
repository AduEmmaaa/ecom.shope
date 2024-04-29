import { createContext, useState } from "react";

import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (i) => {
  const [cartItem, setcartItem] = useState(getDefaultCart());

  const addtocart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    getTotal();
  };
  const removetocart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const getTotal = () => {
    let total = 0;
    for (const a in cartItem) {
      if (cartItem[a] > 0) {
        let iteminfo = all_product.find((goods) => goods.id === Number(i));
        console.log(iteminfo);
         total += iteminfo.new_price * cartItem[a];
      }
      return total;
    }
  };
  const contextValue = {
    all_product,
    cartItem,
    addtocart,
    removetocart,
    getTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {i.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
