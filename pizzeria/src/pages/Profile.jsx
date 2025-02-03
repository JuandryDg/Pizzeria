import { useEffect, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { IoLogOutOutline } from "react-icons/io5";

const Profile = () => {
  const { getProfile, userData, logout } = useContext(CartContext);
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 ">
      <img
        className="w-3/12 rounded-full mt-10"
        src="./public/avatar.jpg "
        alt=""
      />
      <h4 className="bg-slate-600 p-3 rounded text-white mt-4">
        Email: {userData?.email || "Cargando..."}
      </h4>
      <p className="font-bold mt-4">
        Apasionado por el diseño y desarrollo web, siempre en busca de nuevas
        soluciones creativas
      </p>

      <button
        className="bg-blue-700 p-3 rounded text-white mt-4 "
        onClick={logout}
      >
        <IoLogOutOutline />
        Logout
      </button>
    </div>
  );
};

export default Profile;
