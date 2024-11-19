/* eslint-disable react/prop-types */
function CardPizza({ imageSrc, title, description }) {
  return (
    <div className="shadow-lg bg-gray-100 object-fit: cover p-4">
      <img className="max-w-md" src={imageSrc} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
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

export default CardPizza;
