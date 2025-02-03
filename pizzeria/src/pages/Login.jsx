/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import Cart from "./Cart";

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(CartContext);
  const [Email, setEmail] = useState("");
  const [Clave, setClave] = useState("");
  const { login } = useContext(CartContext);
  const { setUser } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(Email, Clave);
    if (success) {
      console.log("navegando a /profile");
      navigate("/profile");
    } else {
      console.error("el login fallo");
    }
  };

  return (
    <div>
      <section className=" bg-cyan-950 flex flex-col items-center justify-center w-10/12 ml-28 min-h-96 mt-20">
        <h1 className="text-white font-extrabold p-5">LOGIN</h1>
        <label className="text-amber-500 font-bold m-4">Email address</label>
        <input
          type="email"
          className="p-3 w-5/6 rounded"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-amber-500 font-bold m-4">Password</label>
        <input
          type="password"
          className="p-3 w-5/6 rounded"
          placeholder="Password"
          onChange={(e) => setClave(e.target.value)}
        />

        <button
          className="p-3 w-32 bg-amber-500 rounded mt-2"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Login;
