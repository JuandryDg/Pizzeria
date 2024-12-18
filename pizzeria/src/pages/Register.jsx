/* eslint-disable no-unused-vars */

import React, { useState } from "react";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Clave, setClave] = useState("");
  const [ConfirmClave, setConfirm] = useState("");

  const handleSubmit = (e) => {
    if (!Email || !Clave || !ConfirmClave) {
      alert("Faltan datos");
    } else if (ConfirmClave === Clave) {
      alert("Registro completado");
    } else {
      alert("la contraseña y la confirmacion no son iguales");
    }
  };
  return (
    <div>
      <section className=" bg-cyan-950 flex flex-col items-center justify-center w-10/12 ml-28 min-h-96 mt-20">
        <h1 className="text-white font-extrabold p-5">REGISTER</h1>
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
          minLength={5}
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
          onChange={(e) => setConfirm(e.target.value)}
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

export default Register;
