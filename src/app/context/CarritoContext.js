"use client";

const { createContext, useState, useContext, useEffect } = require("react");

const ContextCarrito = new createContext();

export const ContextCarritoProduct = ({ children }) => {
  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []
  console.log(cartLS)
  const [cart, setCart] = useState(cartLS);
  const [total, setTotal] = useState(0);

  const addItemsCart = (item) => {
    setCart([...cart, item]);
    if (cart.some((cartState) => cartState.id === item.id)) {
      //iterar sobre el arreglo e identificar el duplicado
      const cartUpdate = cart.map((cartState) => {
        if (cartState.id === item.id) {
          //reescribir la cantidad
          cartState.cantidad = item.cantidad;
        }
        return cartState;
      });
      //añadir al carrito
      setCart(cartUpdate);
    } else {
      setCart([...cart, item]);
    }
  };

  const updateCantidad = item =>{
    const cartUpdate = cart.map(cartState => {
      if(cartState.id === item.id){
        cartState.cantidad = item.cantidad
      }
      return cartState
    })
    setCart(cartUpdate)
  }


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  
  return (
    <ContextCarrito.Provider
      value={{ cart, setCart, total, setTotal, addItemsCart, updateCantidad }}
    >
      {children}
    </ContextCarrito.Provider>
  );
};

export const useContextCarrito = () => {
  return useContext(ContextCarrito);
};
