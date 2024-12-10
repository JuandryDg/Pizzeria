import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
import { useState, useEffect } from "react";
//  import Register from "./pages/Register";
// import Login from "./pages/Login";

// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
function App() {
  const [pizzaN, setPizzaN] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzaN(data);
      });
  }, [pizzaN]);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {/* <Login />
          <Register /> */}
          {/* <Home /> */}
        </div>
        {/* <Cart /> */}
        <Pizza pizza={pizzaN[0]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
