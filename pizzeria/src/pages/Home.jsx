import Header from "../components/Header.jsx";
// import pizzas from "../utils/pizzas.js";
import CardPizza from "../components/CardPizza.jsx";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);

  return (
    <>
      <Header
        title="!Pizzería Mamma Mia! "
        description="!Tenemos las mejores pizzas que podrias encontrar"
      />
      <h2 className="text-center font-bold text-2xl mb-8">Menu de pizzas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
}

export default Home;
