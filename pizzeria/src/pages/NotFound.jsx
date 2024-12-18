import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-cyan-900 flex flex-col justify-center items-center">
      <h1 className="text-yellow-400 font-bold text-5xl text-center">
        {" "}
        PIZZERIA MAMMA MIA{" "}
      </h1>
      <h2 className="text-red-600  font-extrabold text-4xl text-center py-2">
        {" "}
        ERROR 404
      </h2>
      <img
        className="rounded-xl py-6  w-6/12  "
        src="./public/homero-trabaja-en-la-planta.jpeg"
        alt=""
      />
      <p className="text-yellow-400 font-bold text-3xl text-center">
        un error 404 nos indica que la solicitud a nuestro servidor ha fallado
      </p>
      <h4 className="text-teal-300 font-bold text-4xl text-center py-6">
        <span> Homero lo solucionara cuando despierte ....</span>
      </h4>
      <div className="text-center">
        <Link to="/home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10 mb-5">
            Ir a inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
