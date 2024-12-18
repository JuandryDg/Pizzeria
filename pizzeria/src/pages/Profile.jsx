const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 ">
      <img
        className="w-3/12 rounded-full mt-10"
        src="./public/avatar.jpg "
        alt=""
      />
      <h4 className="bg-cyan-600 p-3 rounded text-white mt-4">
        miUsuario@gmail.com
      </h4>
      <p className="font-bold mt-4">
        Apasionado por el diseño y desarrollo web, siempre en busca de nuevas
        soluciones creativas
      </p>
      <button className="bg-slate-700 rounded p-3 mt-10 text-white font-bold ">
        cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
