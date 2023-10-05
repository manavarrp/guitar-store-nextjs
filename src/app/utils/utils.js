import Image from "next/image";

export const navLinks = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
  },
  {
    name: "Tienda",
    href: "/tienda",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: (
      <Image
        width={30}
        height={25}
        src="/img/carrito.png"
        alt="Imagen del carrito"
      />
    ),
    href: "/carrito",
  },
];

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};
