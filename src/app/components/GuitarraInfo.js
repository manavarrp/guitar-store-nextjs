"use client";

import React, { useState } from "react";
import useGetListGuitarsByID from "../hooks/useGetListGuitarsByID";
import { useParams } from "next/navigation";
import styles from "../styles/guitarras.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContextCarrito } from "../context/CarritoContext";
import Spinner from "./Spinner";

const GuitarraInfo = () => {
  const [cantidad, setCantidad] = useState(0);
  const { url } = useParams();
  const { loading, guitar } = useGetListGuitarsByID(url);
  //console.log(cantidad)

  const id = guitar?.id;

  const { addItemsCart, cart } = useContextCarrito();
  //console.log({ cart });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad validad");
      return;
    }
    const payload = {
      id,
      cantidad,
      imagen: guitar?.attributes?.image?.data?.attributes?.url,
      nombre: guitar?.attributes?.name,
      precio: guitar?.attributes?.price,
    };
   // console.log(payload);

    addItemsCart(payload)
  };

  if (loading) return <Spinner/>;
  return (
    <>
      <div className={styles.guitarra}>
        <Image
          src={guitar?.attributes?.image?.data?.attributes?.url}
          width={600}
          height={400}
          alt={`Imagen guitarrassss ${guitar?.attributes?.name}`}
        />
        <div className={styles.contenido}>
          <h3>{guitar?.attributes?.name}</h3>
          <p className={styles.descripcion}>
            {guitar?.attributes?.description}
          </p>
          <p className={styles.precio}>${guitar?.attributes?.price}</p>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad: </label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(+e.target.value)}
            >
              <option value="0">Seleccione cuantas--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
      <Link href="/tienda" className={styles.enlace}>
        Volver
      </Link>
    </>
  );
};

export default GuitarraInfo;
