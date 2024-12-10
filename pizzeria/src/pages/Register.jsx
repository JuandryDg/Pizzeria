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
      <section className="caja">
        <h1>REGISTER</h1>
        <label>Email address</label>
        <input
          type="email"
          className="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="password"
          placeholder="Password"
          minLength={5}
          onChange={(e) => setClave(e.target.value)}
        />
        <label> Confirm Password</label>
        <input
          type="password"
          className="password"
          placeholder="confirm your password"
          minLength={5}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default Register;
