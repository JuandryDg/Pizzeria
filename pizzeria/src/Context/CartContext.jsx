/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [car, setCar] = useState([]);

  // Añadir una pizza al carrito
  const addToCart = (pizza) => {
    setCar((prevCart) => {
      const exists = prevCart.find((item) => item.id === pizza.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: (item.count || 0) + 1 } // Asegurar que count sea válido
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...pizza,
            price: parseFloat(pizza.price) || 0, // Asegurar que price sea válido
            count: 1,
          },
        ];
      }
    });
  };

  // Quitar una pizza del carrito
  const removeFromCart = (id) => {
    setCar((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const calculateTotal = () => {
    const total = car.reduce(
      (total, item) => total + parseFloat(item.price) * item.count,

      0
    );
    console.log("Total calculation in context:", total); // Depuración
    return total;
  };

  return (
    <CartContext.Provider
      value={{ car, setCar, addToCart, removeFromCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
