import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        console.log(data);
      });
  }, [id]);

  if (!pizza) {
    return <h2>pizza no encontrada</h2>;
  }
  return (
    <div className="shadow-lg bg-gray-100 p-4 flex flex-col items-center justify-center mt-20">
      <img
        className="max-w-md border-gray-900 rounded"
        src={pizza.img}
        alt={pizza.name}
      />
      <div className="px-6 py-4">
        <h2 className=" text-xl mb-2 text-center font-extrabold">
          {pizza.name}
        </h2>
        <p className="text-gray-700 text-base">{pizza.desc}</p>
        <p className="text-gray-700 text-base">
          Ingredientes: {pizza.ingredients.join(", ")}
        </p>
        <p className="text-black text-base font-semibold">
          Precio: ${pizza.price}
        </p>
      </div>
    </div>
  );
}

export default Pizza;
