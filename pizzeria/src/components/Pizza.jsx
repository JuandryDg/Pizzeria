/* eslint-disable react/prop-types */
function Pizza({ pizza }) {
  return (
    <div className="shadow-lg bg-gray-100 object-fit: cover p-4 h-screen flex">
      <img
        className="max-w-full  items-center justify-center "
        src={pizza.img}
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pizza.name}</div>
        <p className="text-gray-700 text-base">{pizza.desc}</p>
        <p className="text-gray-700 text-base gap-10">
          INGREDIENTES :{pizza.ingredients}
        </p>
        <p>precio: {pizza.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          añadir
        </button>
        <button className="bg-white hover:bg-white text-black  font-bold py-2 px-4 rounded ">
          Ver mas
        </button>
      </div>
    </div>
  );
}

export default Pizza;
