import CardPizza from "../components/CardPizza";
import { useState, useEffect } from "react";

function Pizza() {
  const [pizzas, setPizzas] = useState([
    {
      id: 154,
      name: "juandry",
      des: "Hola",
      img: "foto",
      ingredients: "papa y tomate",
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <CardPizza
        key={pizzas[0].id}
        title={pizzas[0].name}
        img={pizzas[0].img}
        description={pizzas[0].desc}
        ingredients={pizzas[0].ingredients}
      />
    </>
  );
}

export default Pizza;
