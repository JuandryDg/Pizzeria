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
import { Navigate } from "react-router-dom";

function App() {
  const { token } = useContext(CartContext);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className=""></div>

        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
