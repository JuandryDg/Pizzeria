/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "./Form.css";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Clave, setClave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const longitud = Clave.length;

    if (Email && Clave) {
      if (longitud < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
      } else {
        alert("enviado correctamente");
      }
    } else {
      alert("faltan Datos");
    }
  };

  function confirmarLongitud() {}

  return (
    <div>
      <section className="caja">
        <h1>LOGIN</h1>
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
          onChange={(e) => setClave(e.target.value)}
        />

        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default Login;
