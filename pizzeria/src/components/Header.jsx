/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Header.css";

function Header({ image, title, description }) {
  return (
    <div className="headerImg ">
      <div className="opacity">
        <div className=" texto font-bold text-xl mb-2">{title}</div>
        <p className=" texto2 text-white text-center">{description}</p>
      </div>
    </div>
  );
}

export default Header;
