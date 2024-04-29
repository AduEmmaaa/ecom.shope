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
  };
  const removetocart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const getTotal = () => {
    let answer = 0;
    for (const itemid in cartItem) {
      if (cartItem[itemid] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(itemid)
        );
        if (itemInfo) {
          answer += itemInfo.new_price * cartItem[itemid];
        }
      }
    }
    return answer;
  };

  const totalIteminCart = () => {
    let Titem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        Titem += cartItem[item];
      }
    }
    return Titem;
  };

  const contextValue = {
    all_product,
    cartItem,
    addtocart,
    removetocart,
    getTotal,
    totalIteminCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {i.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
