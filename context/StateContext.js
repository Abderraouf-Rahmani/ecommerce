import React, { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
import notify from "../util/util";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + Number(product.price) * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      let updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            // total: totalPrice,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      // product.total = totalPrice;
      setCartItems([...cartItems, { ...product }]);
    }
    // toast(`${qty} ${product.name} added to the cart.`);
    notify(
      qty > 1
        ? `${qty} Products added to the cart.`
        : `One product added to your cart.`,
      "prohmise"
    );
  };

  const updateCartItemQty = (index, qtyFactor, cartItem) => {
    let cartItemsArrToBeUpdated = cartItems;
    if (qtyFactor === "inc") {
      cartItemsArrToBeUpdated[index].quantity = cartItem.quantity + 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice + cartItem.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty + 1);
    } else if (qtyFactor === "dec") {
      if (cartItem.quantity <= 1) return;
      cartItemsArrToBeUpdated[index].quantity = cartItem.quantity - 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice - cartItem.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty - 1);
    }
    cartItemsArrToBeUpdated[index].totalPrice =
      cartItem.quantity * cartItem.price;

    setCartItems([...cartItemsArrToBeUpdated]);
  };

  const handleCartItemRemove = (index, cartItem) => {
    let cartItemsArrToBeUpdated = cartItems;
    setTotalQuantities((prevTotalQty) => prevTotalQty - cartItem.quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - cartItem.price * cartItem.quantity
    );

    cartItemsArrToBeUpdated.splice(index, 1);
    setCartItems([...cartItemsArrToBeUpdated]);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCart,
        updateCartItemQty,
        setCartItems,
        handleCartItemRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
