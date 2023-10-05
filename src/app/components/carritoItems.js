"use client";

import React, { useEffect, useState } from "react";
import style from "../styles/carrito.module.css";
import { useContextCarrito } from "../context/CarritoContext";
import Image from "next/image";

const CarritoItems = () => {
  const { cart, updateCantidad, total, setTotal, setCart } = useContextCarrito();

  const [pageUpload, setPageUpload] = useState(false);

  useEffect(() => {
    setPageUpload(true)
  }, [])

  useEffect(() => {
    const calculeTotal = cart.reduce(
      (total, itemCart) => total + itemCart.cantidad * itemCart.precio,
      0
    );
    setTotal(calculeTotal);
  }, [cart, setTotal]);

  const deleteItem = (id) => {
    const updateCart = cart.filter(carState => carState.id !== id)
    setCart(updateCart)
  };

  //console.log({ cart });
  return pageUpload ? (
    <>
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className={style.contenido}>
        <div className={style.carrito}>
          <h2>Articulos</h2>
          {cart.length === 0
            ? "Carrito Vacio"
            : cart.map((itemCart) => (
                <div key={itemCart.id} className={style.producto}>
                  <div>
                    <Image
                      src={itemCart.imagen}
                      width={200}
                      height={100}
                      alt={`Imagen guitarras ${itemCart.nombre}`}
                    />
                  </div>
                  <div>
                    <p className={style.nombre}>{itemCart.nombre}</p>
                    <div>
                      <p>Cantidad:</p>
                      <select
                        value={itemCart.cantidad}
                        className={style.select}
                        onChange={(e) =>
                          updateCantidad({
                            cantidad: +e.target.value,
                            id: itemCart.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <p className={style.precio}>
                      $<span> {itemCart.precio}</span>
                    </p>
                    <p className={style.subtotal}>
                      {" "}
                      SubTotal: $
                      <span> {itemCart.precio * itemCart.cantidad}</span>
                    </p>
                    <button
                      type="button"
                      className={style.btn}
                      onClick={() => deleteItem(itemCart.id)}
                    >X</button>
                  </div>
                </div>
              ))}
        </div>
        <aside className={style.resumen}>
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: {total} </p>
        </aside>
      </div>
    </main>
    </>
  ) : null
};

export default CarritoItems;
