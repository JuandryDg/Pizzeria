/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Clave, setClave] = useState("");
  const [ConfirmClave, setConfirm] = useState("");
  const { register } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Email || !Clave || !ConfirmClave) {
      alert("Faltan datos");
    } else if (ConfirmClave === Clave) {
      alert("Registro completado");
    } else {
      alert("la contraseña y la confirmacion no son iguales");
    }
    console.log("enviando datos", { Email, Clave });
    await register(Email, Clave);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" bg-cyan-950 flex flex-col items-center justify-center w-10/12 ml-28 min-h-96 mt-20"
      >
        <h1 className="text-white font-extrabold p-5">REGISTER</h1>
        <label className="text-amber-500 font-bold m-4">Email address</label>
        <input
          type="email"
          className="p-3 w-5/6 rounded"
          placeholder="Enter email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-amber-500 font-bold m-4">Password</label>
        <input
          type="password"
          className="p-3 w-5/6 rounded"
          placeholder="Password"
          minLength={5}
          value={Clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <label className="text-amber-500 font-bold m-4">
          {" "}
          Confirm Password
        </label>
        <input
          type="password"
          className="p-3 w-5/6 rounded"
          placeholder="confirm your password"
          minLength={5}
          value={ConfirmClave}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button className="p-3 w-32 bg-amber-500 rounded mt-2" type="submit">
          Submit
        </button>
        <p className=" text-center text-white m-3 *:">
          Ya tienes cuenta? inicia sesion
        </p>
      </form>
    </div>
  );
};

export default Register;
