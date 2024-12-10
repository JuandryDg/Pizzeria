import { useState } from "react";
import Carritos from "../utils/Carrito";
import "../App.css";
function Cart() {
  const [cart, setCar] = useState(Carritos);
  const increment = (id) => {
    setCar((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (id) => {
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

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="m-5">
      <h1 className="text-2xl font-semibold text-center mb-8">
        {" "}
        Carrito de compras
      </h1>

      {cart.map((item) => (
        <div className="flex item-center p-4 mb-4" key={item.id}>
          <img
            src={item.img}
            alt={item.name}
            className="w-40 h-40 rounded image"
          />
          <div className="text-2xl font-semibold text-center">
            <h2 className="p-2">{item.name}</h2>
            <p>${item.price}</p>
            <p>{item.count}</p>
          </div>
          <div className="btns">
            <button
              onClick={() => decrement(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded btn "
            >
              -
            </button>

            <button
              onClick={() => increment(item.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded btn "
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="font-bold text-center text-2xl">
        <h3>Total:${calculateTotal()}</h3>
        <button className="bg-green-400 p-5 rounded btn">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;
