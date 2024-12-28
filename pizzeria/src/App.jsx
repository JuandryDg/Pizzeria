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
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className=""></div>

          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/pizza/p001" element={<Pizza />}></Route>
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
