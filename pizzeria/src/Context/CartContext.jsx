/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [car, setCar] = useState([]);
  const [user, setUser] = useState(true);
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});

  // crear una funcion que registra los usuarios

  const register = async (Email, Clave) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: Email, password: Clave }),
      });
      const data = await response.json();
      if (response.ok) {
        //evaluamos con el ok que este en el rango 200  a 299 osea que sea una respuesta exitosa y esto nos devuelve un boolean
        alert("usuario registrado con exito");
      } else {
        alert("No se pudo conectar con el servidor");

        console.error(`Error al registar ${data.error}`);
      }
    } catch (error) {
      console.error("Error al registrar", error);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setUser(true);
    }
  }, []);
  //crear una funcion que loguee el usuario
  const login = async (Email, Clave) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: Email, password: Clave }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setUser(true);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        //evaluamos con el ok que este en el rango 200  a 299 osea que sea una respuesta exitosa y esto nos devuelve un boolean
        alert("Bienvenido");

        return true;
      } else {
        alert("No se pudo conectar con el servidor");

        console.error(`Error al hacer login ${data.error}`);
      }
      return false;
    } catch (error) {
      console.error("Error al login", error);
      return false;
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        alert("No se pudo conectar con el servidor");

        // eslint-disable-next-line no-undef
        console.error(`Error${error}`);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  //funcion para extraer el paylod del token y con esto mostrar data en el perfil

  const logout = () => {
    setToken(false);
    setUser(false);
    localStorage.removeItem("token");
  };
  // Añadir una pizza al carrito
  const addToCart = (pizza) => {
    setCar((prevCart) => {
      const exists = prevCart.find((item) => item.id === pizza.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: (item.count || 0) + 1 } // Asegurar que count sea válido
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...pizza,
            price: parseFloat(pizza.price) || 0, // Asegurar que price sea válido
            count: 1,
          },
        ];
      }
    });
  };

  // Quitar una pizza del carrito
  const removeFromCart = (id) => {
    setCar((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const calculateTotal = () => {
    const total = car.reduce(
      (total, item) => total + parseFloat(item.price) * item.count,

      0
    );
    console.log("Total calculation in context:", total); // Depuración
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        car,
        setCar,
        addToCart,
        removeFromCart,
        calculateTotal,
        user,
        setUser,
        register,
        setToken,
        token,
        setEmail,
        email,
        login,
        logout,
        getProfile,
        userData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
