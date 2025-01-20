import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";
import { CartContext } from "./Context/CartContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className=""></div>

        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route
            path="/profile"
            element={user ? <Profile /> : <Login />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
