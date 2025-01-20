/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CardPizza({ pizza }) {
  const navigate = useNavigate();
  // const { car, setCar } = useContext(CartContext);
  const { addToCart: addToCart } = useContext(CartContext);

  const verDetalle = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className="shadow-lg bg-gray-100 p-4">
      <img className="max-w-md" src={pizza.img} alt={pizza.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{pizza.name}</h2>
        <p className="text-gray-700 text-base">{pizza.desc}</p>
        <p className="text-gray-700 text-base">
          Ingredientes: {pizza.ingredients.join(", ")}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 ">
        <button
          onClick={() => addToCart(pizza)}
          className="bg-green-500 hover:bg-green-950 text-white font-bold py-2 px-4 rounded m-5"
        >
          Añadir
        </button>
        <button
          onClick={verDetalle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
        >
          ver Detalle
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
