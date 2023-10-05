"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/grid.module.css";
import stylesgui from "../styles/guitarras.module.css";
import useGetListGuitars from "../hooks/useGetListGuitars";
import Spinner from "./Spinner";

const ListGuitars = () => {
  const { guitars, loading } = useGetListGuitars();
  //console.log(guitars);

  if (loading) return <Spinner/>;
  return (
    <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>
      <div className={styles.grid}>
        {guitars &&
          guitars?.map((guitar) => (
            <div className={stylesgui.guitarra} key={guitar.id}>
              <Image
                src={
                  guitar?.attributes?.image?.data?.attributes?.formats?.medium
                    ?.url
                }
                width={600}
                height={400}
                alt={`Imagen guitarra ${guitar?.attributes?.name}`}
              />
              <div className={stylesgui.contenido}>
                <h3>{guitar.attributes.name}</h3>
                <p className={stylesgui.descripcion}>
                  {guitar.attributes.description}
                </p>
                <p className={stylesgui.precio}>${guitar.attributes.price}</p>
                <Link
                  href={`/guitarras/${guitar.attributes.url}`}
                  className={stylesgui.enlace}
                >
                  Ver Producto
                </Link>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default ListGuitars;
