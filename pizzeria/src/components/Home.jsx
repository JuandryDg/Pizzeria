import Header from "./Header.jsx";
import CardPizza from "./CardPizza";
function Home() {
  return (
    <>
      <Header
        title="!Pizzería Mamma Mia! "
        description="!Tenemos las mejores pizzas que podrias encontrar"
      />
      <div className="flex flex-row gap-x-10">
        <CardPizza
          imageSrc="https://www.pizzapizza.cl/wp-content/uploads/2021/01/espanola-web-scaled.jpg"
          title="Pizza Napolitana"
          description=" Precio: $5.990"
        />
        <CardPizza
          imageSrc="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          title="Pizza Española"
          description=" Precio: $6.990"
        />
        <CardPizza
          imageSrc=" https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          title="Pizza Peperonni"
          description=" Precio: $5.990"
        />
      </div>
    </>
  );
}

export default Home;
